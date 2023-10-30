import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import api from "../api/api";

import { UserData } from "../types/types";

import Input from "../components/Input";
import Cards from "../components/Cards";
import Modal from "../components/Modal";

const Main: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    position_name: "",
    department: "",
    hire_date: "",
  });

  const handleOpen = (data: UserData) => {
    setSelectedUserData(data);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    setSelectedUserData({
      name: "",
      phone: "",
      email: "",
      address: "",
      position_name: "",
      department: "",
      hire_date: "",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await api.getAllList();
      setData(userData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [search]);

  useEffect(() => {
    const fetchFiltered = async () => {
      const filteredData = await api.getQueryList(debouncedSearch);
      setData(filteredData);
    };
    fetchFiltered();
  }, [debouncedSearch]);

  return (
    <Grid container style={{ flexDirection: "column", alignItems: "center" }}>
      <Input setSearch={setSearch} />
      <Cards data={data} handleOpen={handleOpen} />
      <Modal
        modal={modal}
        handleClose={handleClose}
        selectedUserData={selectedUserData}
      />
    </Grid>
  );
};

export default Main;
