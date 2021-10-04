import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";

export default {
    title: "searchForm",
    component: "SearchForm",
};

export const withLabel = (args) => <SearchForm {...args}/>