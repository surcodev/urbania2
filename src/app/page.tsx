import Filters from "@/components/filters";
import Loader from "@/components/Loader";
import { Suspense } from "react";
import PropertiesData from "./(private)/_components/properties-data";
import HeroSearch from "./(private)/_components/hero-search";

export default async function Home({ searchParams }: { searchParams: any }) {
  const key = JSON.stringify(searchParams);
  return (
    <div>
      <HeroSearch />
      <div className="">
        <Filters
          searchParams={searchParams}
        />
        <Suspense fallback={<Loader />} key={key}>
          <PropertiesData
            searchParams={searchParams}
          />
        </Suspense>
      </div>
    </div>
  );
}
