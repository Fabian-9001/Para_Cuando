export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  color?: 'gray' | 'pink' | 'blue' | 'white' | 'yellow';
  variant?: 'normal' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<IButton> = ({
  children,
  color = 'gray',
  variant = 'normal',
  size = 'sm',
  className,
  ...buttonProps
}) => {
  const styles = {
    normal: {
      pink: 'bg-app-pink text-app-white',
      blue: 'bg-app-blue text-app-white',
      gray: 'bg-app-gray text-app-white',
      white: 'bg-app-white text-app-gray',
      yellow: 'bg-app-yellow text-app-black',
    },
    outlined: {
      pink: 'border-app-pink border-[2px] text-app-white',
      blue: 'border-app-blue border-[2px] text-app-white',
      gray: 'border-app-gray border-[2px] text-app-white',
      white: 'border-app-white border-[2px] text-app-white',
      yellow: 'border-app-yellow text-app-yellow',
    },
    size: {
      sm: 'sm:min-w-[125px]',
      md: 'sm:min-w-[310px]',
      lg: 'sm:min-w-[380px]',
    },
  };

  return (
    <button
      {...buttonProps}
      className={`${styles[variant][color]} ${styles.size[size]} app-subTitle-1 px-3 rounded-[30px] h-[50px] ${className}`}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
