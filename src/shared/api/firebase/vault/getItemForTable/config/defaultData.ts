export type TypeDefaultValues = {
  id: string;
  name: string;
  owner: string;
  folder: string;
};

export const defaultValues = ({
  id,
  name,
  owner,
  folder,
}: TypeDefaultValues): TypeDefaultValues => ({
  id: id,
  name: name,
  owner: owner,
  folder: folder,
});
