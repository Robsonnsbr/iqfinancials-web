// FormBlock.tsx
import React from "react";
import ContentContainer from "@components/common/containers/ContentContainer";
import SvgLine from "@components/common/svgs/SvgLine";
import SearchForm from "@components/home/components/form-block/components/SearchForm";

export default function FormBlock() {
  return (
    <ContentContainer
      className="flex flex-col"
      id="search-form-block-container"
    >
      <SvgLine className="mt-9" />
      <div className="flex flex-col w-full justify-center items-center  3xl:pb-6">
        <SearchForm />
      </div>
    </ContentContainer>
  );
}
