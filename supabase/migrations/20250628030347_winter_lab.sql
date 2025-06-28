/*
  # ZippyCoin Database Schema

  1. Tables
    - foundation_users (shared with go.zippyfoundation.org)
    - zcoin_wallets (ZippyCoin wallet management)
    - zcoin_trust_delegations (Trust delegation relationships)
    - zcoin_trust_metrics (Trust scoring metrics)
    - zcoin_network_stats (Network performance data)
    - zcoin_validators (Validator information)
    - zcoin_defi_protocols (DeFi protocol configurations)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Cross-origin session sharing support
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enums
CREATE TYPE wallet_type AS ENUM ('origin', 'standard', 'validator');
CREATE TYPE validator_status AS ENUM ('active', 'inactive', 'jailed');
CREATE TYPE protocol_type AS ENUM ('yield_farming', 'lending', 'amm', 'staking');
CREATE TYPE user_type AS ENUM ('foundation', 'zcoin', 'admin');

-- Foundation Users Table (shared between sites)
CREATE TABLE IF NOT EXISTS foundation_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_type user_type DEFAULT 'zcoin',
  verified boolean DEFAULT false
);

-- ZippyCoin Wallets
CREATE TABLE IF NOT EXISTS zcoin_wallets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES foundation_users(id) ON DELETE CASCADE,
  wallet_address text UNIQUE NOT NULL,
  wallet_type wallet_type DEFAULT 'standard',
  trust_score numeric(5,2) DEFAULT 0,
  delegation_depth integer DEFAULT 0,
  stake_amount numeric(20,8) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  metadata jsonb
);

-- Trust Delegations
CREATE TABLE IF NOT EXISTS zcoin_trust_delegations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  delegator_wallet_id uuid REFERENCES zcoin_wallets(id) ON DELETE CASCADE,
  delegatee_wallet_id uuid REFERENCES zcoin_wallets(id) ON DELETE CASCADE,
  delegation_amount numeric(20,8) NOT NULL,
  trust_weight numeric(5,4) DEFAULT 1.0,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz,
  is_active boolean DEFAULT true,
  transaction_hash text,
  UNIQUE(delegator_wallet_id, delegatee_wallet_id)
);

-- Trust Metrics (for reputation calculation)
CREATE TABLE IF NOT EXISTS zcoin_trust_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_id uuid REFERENCES zcoin_wallets(id) ON DELETE CASCADE,
  metric_type text NOT NULL, -- 'transaction_success', 'validator_uptime', etc.
  metric_value numeric(10,4) NOT NULL,
  recorded_at timestamptz DEFAULT now(),
  metadata jsonb
);

-- Network Statistics
CREATE TABLE IF NOT EXISTS zcoin_network_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp timestamptz DEFAULT now(),
  tps integer NOT NULL,
  block_height bigint NOT NULL,
  active_validators integer NOT NULL,
  total_staked numeric(20,8) NOT NULL,
  network_health numeric(5,2) NOT NULL,
  avg_block_time numeric(8,3) NOT NULL,
  metadata jsonb
);

-- Validators
CREATE TABLE IF NOT EXISTS zcoin_validators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_id uuid REFERENCES zcoin_wallets(id) ON DELETE CASCADE,
  validator_name text NOT NULL,
  trust_score numeric(5,2) DEFAULT 0,
  uptime numeric(5,2) DEFAULT 0,
  stake_amount numeric(20,8) NOT NULL,
  commission_rate numeric(5,4) DEFAULT 0,
  status validator_status DEFAULT 'inactive',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  metadata jsonb
);

-- DeFi Protocols
CREATE TABLE IF NOT EXISTS zcoin_defi_protocols (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_name text UNIQUE NOT NULL,
  protocol_type protocol_type NOT NULL,
  trust_multiplier numeric(5,2) DEFAULT 1.0,
  min_trust_score numeric(5,2) DEFAULT 0,
  tvl numeric(20,8) DEFAULT 0,
  apy numeric(5,2) DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  metadata jsonb
);

-- Enable Row Level Security
ALTER TABLE foundation_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE zcoin_wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE zcoin_trust_delegations ENABLE ROW LEVEL SECURITY;
ALTER TABLE zcoin_trust_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE zcoin_network_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE zcoin_validators ENABLE ROW LEVEL SECURITY;
ALTER TABLE zcoin_defi_protocols ENABLE ROW LEVEL SECURITY;

-- RLS Policies for foundation_users
CREATE POLICY "Users can read own data" ON foundation_users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own data" ON foundation_users
  FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Allow user creation" ON foundation_users
  FOR INSERT WITH CHECK (auth.uid()::text = id::text);

-- RLS Policies for zcoin_wallets
CREATE POLICY "Users can read own wallets" ON zcoin_wallets
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert own wallets" ON zcoin_wallets
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own wallets" ON zcoin_wallets
  FOR UPDATE USING (user_id = auth.uid());

-- Public read access for network stats and validators
CREATE POLICY "Anyone can read network stats" ON zcoin_network_stats
  FOR SELECT USING (true);

CREATE POLICY "Anyone can read validators" ON zcoin_validators
  FOR SELECT USING (true);

CREATE POLICY "Anyone can read defi protocols" ON zcoin_defi_protocols
  FOR SELECT USING (true);

-- Trust delegations - users can read/manage their own
CREATE POLICY "Users can read delegations involving their wallets" ON zcoin_trust_delegations
  FOR SELECT USING (
    delegator_wallet_id IN (SELECT id FROM zcoin_wallets WHERE user_id = auth.uid()) OR
    delegatee_wallet_id IN (SELECT id FROM zcoin_wallets WHERE user_id = auth.uid())
  );

-- Trust metrics - public read, authenticated insert
CREATE POLICY "Anyone can read trust metrics" ON zcoin_trust_metrics
  FOR SELECT USING (true);

-- Create indexes for performance
CREATE INDEX idx_zcoin_wallets_user_id ON zcoin_wallets(user_id);
CREATE INDEX idx_zcoin_wallets_address ON zcoin_wallets(wallet_address);
CREATE INDEX idx_zcoin_wallets_trust_score ON zcoin_wallets(trust_score DESC);
CREATE INDEX idx_zcoin_delegations_delegator ON zcoin_trust_delegations(delegator_wallet_id);
CREATE INDEX idx_zcoin_delegations_delegatee ON zcoin_trust_delegations(delegatee_wallet_id);
CREATE INDEX idx_zcoin_metrics_wallet ON zcoin_trust_metrics(wallet_id);
CREATE INDEX idx_zcoin_metrics_type ON zcoin_trust_metrics(metric_type);
CREATE INDEX idx_zcoin_network_stats_timestamp ON zcoin_network_stats(timestamp DESC);
CREATE INDEX idx_zcoin_validators_status ON zcoin_validators(status);

-- Functions for trust calculation
CREATE OR REPLACE FUNCTION zcoin_calculate_trust_score(wallet_id uuid)
RETURNS numeric AS $$
DECLARE
  base_score numeric := 0;
  delegation_factor numeric := 1.0;
  reputation_factor numeric := 1.0;
  network_factor numeric := 1.0;
  stake_factor numeric := 1.0;
  final_score numeric;
BEGIN
  -- Get base trust from delegations (simplified)
  SELECT COALESCE(AVG(w.trust_score), 0) INTO base_score
  FROM zcoin_trust_delegations d
  JOIN zcoin_wallets w ON w.id = d.delegator_wallet_id
  WHERE d.delegatee_wallet_id = wallet_id AND d.is_active = true;
  
  -- Apply delegation decay (simplified)
  SELECT COALESCE(delegation_depth, 0) INTO delegation_factor
  FROM zcoin_wallets WHERE id = wallet_id;
  
  delegation_factor := POWER(0.9, delegation_factor);
  
  -- Calculate reputation factor from metrics
  SELECT COALESCE(AVG(metric_value / 100.0), 0.5) INTO reputation_factor
  FROM zcoin_trust_metrics
  WHERE wallet_id = wallet_id
  AND recorded_at > now() - interval '30 days';
  
  -- Network effect (delegation count)
  SELECT COUNT(*) INTO network_factor
  FROM zcoin_trust_delegations
  WHERE delegatee_wallet_id = wallet_id AND is_active = true;
  
  network_factor := LEAST(1.0, 0.5 + (network_factor * 0.05));
  
  -- Stake factor (logarithmic)
  SELECT COALESCE(stake_amount, 0) INTO stake_factor
  FROM zcoin_wallets WHERE id = wallet_id;
  
  stake_factor := GREATEST(0.7, 0.7 + (LN(GREATEST(stake_factor / 1000.0, 1)) * 0.1));
  
  -- Calculate final score
  final_score := base_score * delegation_factor * reputation_factor * network_factor * stake_factor;
  
  -- Update the wallet's trust score
  UPDATE zcoin_wallets 
  SET trust_score = LEAST(100, GREATEST(0, final_score)), 
      updated_at = now()
  WHERE id = wallet_id;
  
  RETURN final_score;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get network health
CREATE OR REPLACE FUNCTION zcoin_get_network_health()
RETURNS json AS $$
DECLARE
  latest_stats record;
  health_data json;
BEGIN
  SELECT * INTO latest_stats
  FROM zcoin_network_stats
  ORDER BY timestamp DESC
  LIMIT 1;
  
  IF latest_stats IS NULL THEN
    RETURN '{"error": "No network data available"}';
  END IF;
  
  health_data := json_build_object(
    'tps', latest_stats.tps,
    'block_height', latest_stats.block_height,
    'active_validators', latest_stats.active_validators,
    'total_staked', latest_stats.total_staked,
    'network_health', latest_stats.network_health,
    'avg_block_time', latest_stats.avg_block_time,
    'last_updated', latest_stats.timestamp
  );
  
  RETURN health_data;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_foundation_users_updated_at
  BEFORE UPDATE ON foundation_users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_zcoin_wallets_updated_at
  BEFORE UPDATE ON zcoin_wallets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_zcoin_validators_updated_at
  BEFORE UPDATE ON zcoin_validators
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_zcoin_defi_protocols_updated_at
  BEFORE UPDATE ON zcoin_defi_protocols
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();