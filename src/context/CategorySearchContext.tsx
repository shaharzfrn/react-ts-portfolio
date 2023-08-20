import { PropsWithChildren, createContext, useMemo, useState } from 'react';

type CategorySearchContextType = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategorySearchContext = createContext<CategorySearchContextType | null>(
  null
);

function CategorySearchProvider({ children }: PropsWithChildren) {
  const [category, setCategory] = useState<string>('');

  const values = useMemo(() => ({ category, setCategory }), [category]);

  return (
    <CategorySearchContext.Provider value={values}>
      {children}
    </CategorySearchContext.Provider>
  );
}

export default CategorySearchProvider;
