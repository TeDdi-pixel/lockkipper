export type MenuItem = {
  id: number;
  icon: React.ReactNode;
  name: string;
  pathname?: string;
  options?: Array<{ id: number; name: string; pathname: string }>;
};
