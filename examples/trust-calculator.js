/**
 * ZippyCoin Trust Calculator Example
 * 
 * This is a simplified educational example of the trust calculation algorithm.
 * The actual implementation includes additional security measures and optimizations.
 * 
 * Trust Formula: T(w) = min(T(p₁), T(p₂), ..., T(pₙ)) × δᵈ × ρ(w) × η(w) × σ(w)
 */

class TrustCalculator {
    constructor() {
        // Delegation decay factor (0.9 = 90%)
        this.delegationDecayFactor = 0.9;
        
        // Maximum delegation depth
        this.maxDelegationDepth = 10;
    }

    /**
     * Calculate trust score for a wallet
     * @param {Object} wallet - Wallet data
     * @param {Array} delegators - Array of delegator wallets
     * @returns {number} Trust score (0-100)
     */
    calculateTrustScore(wallet, delegators = []) {
        // Origin Wallets have maximum trust
        if (wallet.isOriginWallet) {
            return 100;
        }

        // If no delegators, trust score is 0
        if (delegators.length === 0) {
            return 0;
        }

        // Find minimum trust score from delegators
        const minDelegatorTrust = Math.min(...delegators.map(d => d.trustScore));

        // Apply delegation decay factor based on depth
        let decayedTrust = minDelegatorTrust;
        for (let d = 0; d < wallet.delegationDepth; d++) {
            decayedTrust *= this.delegationDecayFactor;
        }

        // Apply reputation factor
        const reputationFactor = this.calculateReputationFactor(wallet);
        decayedTrust *= reputationFactor;

        // Apply network effect factor
        const networkFactor = this.calculateNetworkEffect(wallet);
        decayedTrust *= networkFactor;

        // Apply stake factor
        const stakeFactor = this.calculateStakeFactor(wallet);
        decayedTrust *= stakeFactor;

        return Math.min(100, Math.max(0, decayedTrust));
    }

    /**
     * Calculate reputation factor based on multi-dimensional metrics
     * @param {Object} wallet - Wallet data
     * @returns {number} Reputation factor (0.5-1.0)
     */
    calculateReputationFactor(wallet) {
        const metrics = wallet.reputationMetrics || {};
        
        // Weighted average of reputation metrics
        const weights = {
            transactionSuccess: 0.15,
            validatorUptime: 0.10,
            communityVoting: 0.08,
            securityCompliance: 0.12,
            networkContribution: 0.10,
            timeOnNetwork: 0.08,
            stakeConsistency: 0.07,
            delegationQuality: 0.10,
            fraudPrevention: 0.08,
            ecosystemGrowth: 0.05,
            innovationContrib: 0.04,
            socialTrust: 0.03
        };

        let reputationScore = 0;
        let totalWeight = 0;

        for (const [metric, weight] of Object.entries(weights)) {
            const value = metrics[metric] || 50; // Default to neutral (50)
            reputationScore += (value / 100) * weight;
            totalWeight += weight;
        }

        // Normalize to 0.5-1.0 range
        const factor = reputationScore / totalWeight;
        return Math.max(0.5, Math.min(1.0, factor));
    }

    /**
     * Calculate network effect factor
     * @param {Object} wallet - Wallet data
     * @returns {number} Network factor (0.5-1.0)
     */
    calculateNetworkEffect(wallet) {
        const delegationCount = wallet.delegationCount || 0;
        
        if (delegationCount === 0) return 0.5; // 50% if no delegators
        if (delegationCount >= 10) return 1.0; // 100% if 10+ delegators
        
        // Linear interpolation between 50% and 100%
        return 0.5 + (delegationCount * 0.05); // +5% per delegator
    }

    /**
     * Calculate stake factor based on staked amount
     * @param {Object} wallet - Wallet data
     * @returns {number} Stake factor (0.7-1.0)
     */
    calculateStakeFactor(wallet) {
        const minStake = 1000; // Minimum stake amount
        const stakeAmount = wallet.stakeAmount || 0;
        
        if (stakeAmount < minStake) return 0.7; // 70% if below minimum
        
        // Logarithmic stake factor to prevent whale dominance
        const stakeRatio = stakeAmount / minStake;
        const factor = 0.7 + (Math.log(stakeRatio) * 0.1);
        
        return Math.min(1.0, Math.max(0.7, factor));
    }

    /**
     * Update trust scores for a network of wallets
     * @param {Array} wallets - Array of wallet objects
     * @param {Object} delegations - Delegation relationships
     * @returns {Array} Updated wallets with new trust scores
     */
    updateNetworkTrust(wallets, delegations) {
        const updatedWallets = [...wallets];

        // Calculate trust scores for all wallets
        for (const wallet of updatedWallets) {
            const delegators = this.getDelegators(wallet.id, delegations);
            wallet.trustScore = this.calculateTrustScore(wallet, delegators);
        }

        return updatedWallets;
    }

    /**
     * Get delegators for a specific wallet
     * @param {string} walletId - Wallet ID
     * @param {Object} delegations - Delegation relationships
     * @returns {Array} Array of delegator wallets
     */
    getDelegators(walletId, delegations) {
        const delegatorIds = delegations[walletId] || [];
        return delegatorIds.map(id => ({ id, trustScore: 50 })); // Simplified
    }
}

// Example usage
function demonstrateTrustCalculation() {
    const calculator = new TrustCalculator();

    // Example wallet data
    const wallets = [
        {
            id: 'origin-1',
            isOriginWallet: true,
            trustScore: 100,
            delegationDepth: 0
        },
        {
            id: 'wallet-1',
            isOriginWallet: false,
            trustScore: 0,
            delegationDepth: 1,
            delegationCount: 2,
            stakeAmount: 2000,
            reputationMetrics: {
                transactionSuccess: 95,
                validatorUptime: 98,
                communityVoting: 85,
                securityCompliance: 90,
                networkContribution: 80,
                timeOnNetwork: 70,
                stakeConsistency: 88,
                delegationQuality: 92,
                fraudPrevention: 85,
                ecosystemGrowth: 75,
                innovationContrib: 60,
                socialTrust: 82
            }
        }
    ];

    // Example delegation relationships
    const delegations = {
        'wallet-1': ['origin-1']
    };

    // Calculate trust scores
    const updatedWallets = calculator.updateNetworkTrust(wallets, delegations);

    console.log('Trust Calculation Results:');
    updatedWallets.forEach(wallet => {
        console.log(`${wallet.id}: ${wallet.trustScore.toFixed(2)}`);
    });

    return updatedWallets;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TrustCalculator, demonstrateTrustCalculation };
}

// Run example if in browser
if (typeof window !== 'undefined') {
    window.ZippyCoinTrustCalculator = { TrustCalculator, demonstrateTrustCalculation };
} 