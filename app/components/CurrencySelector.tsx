import { Box, Typography } from "@mui/material";

interface CurrencyButtonProps {
  currency: 'USD' | 'EUR' | 'PHP';
  onClick: () => void;
  isActive: boolean;
}

const CurrencyButton = ({ currency, onClick, isActive }: CurrencyButtonProps) => {
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'PHP': return '₱';
      default: return '$';
    }
  };

  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
        display: 'inline-block',
        marginRight: '8px',
        '&:last-child': { marginRight: 0 }
      }}
    >
      <Box
        component="div"
        sx={{
          position: 'absolute',
          top: '4px',
          left: '-4px',
          right: '4px',
          bottom: '-4px',
          backgroundColor: 'var(--color-secondary)',
          zIndex: 1,
          borderRadius: 1,
          transition: 'all 0.3s ease'
        }}
      />

      <Box
        component="button"
        onClick={onClick}
        sx={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: isActive ? 'var(--color-secondary)' : 'var(--component-background)',
          border: `3px solid var(--color-secondary)`,
          borderRadius: 1,
          transform: isActive ? 'translate(-4px, 4px)' : 'translate(0, 0)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          padding: '8px 16px',
          minWidth: '50px',
          '&:hover': {
            transform: 'translate(-4px, 4px)',
          }
        }}
      >
        <Typography
          variant="h6"
          color={isActive ? 'var(--component-background)' : 'var(--color-primary)'}
          fontSize="16px"
          fontFamily={'Source Sans Regular'}
        >
          {getCurrencySymbol()}
        </Typography>
      </Box>
    </Box>
  );
};

interface CurrencySelectorProps {
  currency: 'USD' | 'EUR' | 'PHP';
  setCurrency: (currency: 'USD' | 'EUR' | 'PHP') => void;
}

export const CurrencySelector = ({ currency, setCurrency }: CurrencySelectorProps) => {
  return (
    <Box display="flex" gap={1}>
      {(['USD', 'EUR', 'PHP'] as const).map((curr) => (
        <CurrencyButton
          key={curr}
          currency={curr}
          isActive={currency === curr}
          onClick={() => setCurrency(curr)}
        />
      ))}
    </Box>
  );
};