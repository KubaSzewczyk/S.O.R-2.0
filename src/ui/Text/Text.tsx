type Props = {
  children: string;
};

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};
