import React from "react";
import "./forms.scss";

import {
  FormControl,
  Input,
  InputLabel,
  FormGroup,
  Button,
} from "@mui/material";
const Forms = () => {
  return (
    <div className="forms">
      <div className="forms__wrapper">
      <FormGroup className="maps__form">
      <h2 className="maps__title">Make Your Reservation Through This Form</h2>
      <div className="maps__inputs">
        <div className="maps__left">
          <FormControl className="maps__control" size="small" focused>
            <Input placeholder="Ex . john Smith" />
          </FormControl>
          <FormControl className="maps__control">
            <InputLabel>Number Of Guests</InputLabel>
            <Input placeholder="" />
          </FormControl>
        </div>
        <div className="maps__right">
          <FormControl className="maps__control" size="small" focused>
            <Input placeholder="Ex . john Smith" />
          </FormControl>
          <FormControl className="maps__control">
            <InputLabel>Check In data</InputLabel>
            <Input placeholder="Ex. +998910050913" type="phone" />
          </FormControl>
        </div>
      </div>

      <FormControl>
        <Input list="list" type="text" placeholder="Antalia" />
        <datalist id="list">
          <option value="antalia">Antalia</option>
          <option value="antalia">Antalia</option>
          <option value="antalia">Antalia</option>
          <option value="antalia">Antalia</option>
          <option value="antalia">Antalia</option>
          <option value="antalia">Antalia</option>
        </datalist>
      </FormControl>
      <br />
      <FormControl>
        <Input list="list" type="text" placeholder="Saudi Arabia" />
        <datalist id="list">
          <option value="antalia">India</option>
          <option value="antalia">India</option>
          <option value="antalia">India</option>
          <option value="antalia">India</option>
          <option value="antalia">India</option>
          <option value="antalia">India</option>
        </datalist>
      </FormControl>
      <br />

      <Button variant="contained">Make Your Reservation Now</Button>
    </FormGroup>
      </div>
    </div>

  );
};

export default Forms;
