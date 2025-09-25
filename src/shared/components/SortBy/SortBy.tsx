/** @format */
"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import styles from "./SortBy.module.scss";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import { useState } from "react";

const SORT_ITEMS = [
  {
    label: "New products first",
    queryParamValue: "created_at",
  },
  {
    label: "Price, low to high",
    queryParamValue: "price",
  },
  {
    label: "Price, high to low",
    queryParamValue: "-price",
  },
];

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const sortValue = searchParams.get("sort");
  const activeItem = SORT_ITEMS.find(
    (item) => item.queryParamValue === sortValue
  );

  const onClick = (queryParamValue: string) => {
    const currentSearchParams = new URLSearchParams(searchParams);

    const sortValue = currentSearchParams.get("sort");

    if (sortValue === queryParamValue || sortValue) {
      currentSearchParams.delete("sort");
    }

    if (sortValue !== queryParamValue) {
      currentSearchParams.append("sort", queryParamValue);
    }

    setIsOpen(false);
    router.replace(`/?${currentSearchParams.toString()}`);
  };

  return (
    <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement='bottom'>
      <PopoverTrigger>
        <div className={styles.container}>
          <span>{activeItem ? activeItem.label : "Sort By"}</span>
          <ChevronDownIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className={styles.listWrapper}>
          <h3>Sort by</h3>
          <div className={styles.list}>
            {SORT_ITEMS.map((sortItem) => (
              <span
                key={sortItem.queryParamValue}
                onClick={() => onClick(sortItem.queryParamValue)}>
                {sortItem.label}
              </span>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SortBy;
