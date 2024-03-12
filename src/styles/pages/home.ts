import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  width: '100%',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  position: 'relative',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  // padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    position: 'absolute',
    left: '0.25rem',
    right: '0.25rem',
    bottom: '0.25rem',
    padding: '2rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',

    strong: {
      fontSize: '$lg',
    },

    span: {
      color: '$green300',
      fontSize: '$xl',
      fontWeight: 'bold'
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  }
},
);