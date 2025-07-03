import Filters from "@/components/filters";
import Loader from "@/components/Loader";
import { Suspense } from "react";
import PropertiesData from "./(private)/_components/properties-data";

export default async function Home({ searchParams }: { searchParams: any }) {
  const key = JSON.stringify(searchParams);
  return (
    <div className="py-5 lg:px-20 px-5">
      <Filters 
        searchParams={searchParams}
      />
      <Suspense fallback={<Loader />} key={key}>
        <PropertiesData 
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}
