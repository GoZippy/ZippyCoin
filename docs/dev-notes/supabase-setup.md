# Supabase Setup for ZippyCoin

## Overview
ZippyCoin shares a Supabase instance with go.zippyfoundation.org using table prefixes to maintain separation:
- `zcoin_*` - ZippyCoin specific tables
- `foundation_*` - Shared foundation tables

## Database Schema

### Shared Tables
- `foundation_users` - Unified user management across both sites

### ZippyCoin Tables
- `zcoin_wallets` - Wallet management and trust scores
- `zcoin_trust_delegations` - Trust delegation relationships
- `zcoin_trust_metrics` - Reputation scoring data
- `zcoin_network_stats` - Network performance metrics
- `zcoin_validators` - Validator information
- `zcoin_defi_protocols` - DeFi protocol configurations

## Authentication & SSO

### Cross-Origin Session Sharing
```typescript
// Implemented in src/lib/supabase.ts
- Automatic session broadcast between origins
- Listens for auth updates from foundation site
- Maintains consistent login state
```

### User Types
- `foundation` - Primary Zippy Foundation users
- `zcoin` - ZippyCoin focused users  
- `admin` - Administrative access

## Environment Variables
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SITE_URL=http://localhost:3000
VITE_FOUNDATION_URL=https://go.zippyfoundation.org
VITE_ZCOIN_TABLE_PREFIX=zcoin_
VITE_FOUNDATION_TABLE_PREFIX=foundation_
VITE_ALLOWED_ORIGINS=http://localhost:3000,https://go.zippyfoundation.org
```

## API Usage Examples

### Wallet Management
```typescript
import { ZCoinAPI } from '../lib/api/zcoin'

// Create wallet
const { data, error } = await ZCoinAPI.createWallet({
  wallet_address: '0x123...',
  wallet_type: 'standard',
  stake_amount: 1000
})

// Get user wallets
const { data: wallets } = await ZCoinAPI.getUserWallets()
```

### Trust System
```typescript
// Delegate trust
await ZCoinAPI.delegateTrust(delegatorWalletId, delegateeWalletId, 500)

// Calculate trust score
await ZCoinAPI.updateTrustScore(walletId)

// Record trust metric
await ZCoinAPI.recordTrustMetric(walletId, 'transaction_success', 95.5)
```

### Network Data
```typescript
// Get latest stats
const { data: stats } = await ZCoinAPI.getLatestNetworkStats()

// Subscribe to real-time updates
const subscription = ZCoinAPI.subscribeToNetworkStats((payload) => {
  console.log('New network stats:', payload.new)
})
```

## Security Considerations

### Row Level Security (RLS)
- All tables have RLS enabled
- Users can only access their own data
- Public read access for network stats and validators
- Authenticated access for trust operations

### Cross-Origin Security
- Validates allowed origins for session sharing
- Uses secure postMessage communication
- Implements PKCE flow for auth

## Migration Strategy
1. Apply migration: `supabase/migrations/001_create_zcoin_tables.sql`
2. Configure environment variables
3. Test cross-origin auth with foundation site
4. Verify RLS policies work correctly
5. Set up real-time subscriptions

## TODO
- [ ] Implement wallet creation flow
- [ ] Add trust delegation UI
- [ ] Create network monitoring dashboard
- [ ] Set up automated trust score calculations
- [ ] Add DeFi protocol integrations