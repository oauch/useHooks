import { SearchItems } from "@/constants/SearchItems";
import { useEffect, useState } from "react";

// 임시 타입
interface Props {
  id: number;
  item: string;
}

/**
 * SearchItem(임시): 데이터 값을 넣어주면 된다.
 */
function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState<Props[]>([]);

  useEffect(() => {
    setFilterValue(
      SearchItems.filter((val) =>
        val.item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <div>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="검색어를 입력해주세요"
      />
      {filterValue.map((val) => (
        <div key={val.id}>{val.item}</div>
      ))}
    </div>
  );
}

export default SearchBar;
