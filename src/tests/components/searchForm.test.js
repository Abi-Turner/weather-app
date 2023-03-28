import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/searchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Leeds",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});