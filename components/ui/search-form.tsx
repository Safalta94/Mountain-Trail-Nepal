import Image from "next/image";
import { cn } from "@/lib/utils";

type SearchFormProps = {
  placeholder: string;
  action?: string;
  name?: string;
  className?: string;
};

export function SearchForm({
  placeholder,
  action = "/experiences",
  name = "q",
  className,
}: SearchFormProps) {
  return (
    <form
      action={action}
      method="get"
      role="search"
      className={cn(
        "flex h-[51px] w-full items-center rounded-[61px] bg-white/10 px-[18px] backdrop-blur-[12px] shadow-[inset_1px_1px_0_rgba(255,255,255,0.55),inset_-1px_-1px_0_rgba(255,255,255,0.2)] mx-auto mt-10 max-w-[598px]",
        className,
      )}
    >
      <input
        type="search"
        name={name}
        aria-label={placeholder}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 appearance-none bg-transparent text-left font-primary text-base font-medium leading-4 tracking-[-0.32px] text-white outline-none placeholder:text-white max-[459px]:text-xs [&::-webkit-search-cancel-button]:hidden"      />
      <button
        type="submit"
        aria-label="Search"
        className="flex shrink-0 cursor-pointer items-center justify-center"
      >
        <Image src="/images/search.svg" alt="" width={20} height={20} />
      </button>
    </form>
  );
}