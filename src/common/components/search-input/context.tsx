import { useGlobalContext } from "@/stores/context/use-context";
import { SearchInput } from ".";

export const SearchInputContext = (props: { className?: string }) => {
  const { searchText, setSearchText } = useGlobalContext();

  return (
    <SearchInput
      className={props.className}
      value={searchText}
      onChange={setSearchText}
    />
  );
};
