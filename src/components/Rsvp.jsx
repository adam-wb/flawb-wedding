import React, { useState } from 'react';

// TODO Unused - remove
/* eslint-disable no-unused-vars */
const UNDER_CONSTRUCTION = true;

const Rsvp = () => {
    const [name, setName] = useState();
    const [attendance, setAttendance] = useState();
    const [diet, setDiet] = useState("none");

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onClickAttendance = () => {
        // TODO
    }

    const submitRSVP = () => {
        // TODO
    }

    if (UNDER_CONSTRUCTION) {
        return (
            <h1>Under construction</h1>
        )
    }
    return (
        <div className="Rsvp">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>RSVP</h1>
                        <form>
                            <div className="form-group">
                                <label for="nameInput" className="form-label">Name</label>
                                <input className="form-control" id="nameInput" onChange={onNameChange} required/>
                            </div>
                            <div className="form-group">
                            <h2>Attendance</h2>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="attendance" id="dayAttendance" />
                                    <label className="form-check-label" for="dayAttendance">Ceremony & Reception</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="attendance" id="nightAttendance" />
                                    <label className="form-check-label" for="nightAttendance">Evening</label>
                                </div>
                            </div>
                            <div className="form-group">
                            <h2>Dietary Requirements</h2>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="dietOptions" id="noneCheck" onChange={() => setDiet("none")} defaultChecked/>
                                    <label className="form-check-label" for="noneCheck">None</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="dietOptions" id="vegeterianCheck" onChange={() => setDiet("vegetarian")}/>
                                    <label className="form-check-label" for="vegetarianCheck">Vegetarian</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="dietOptions" id="veganCheck" onChange={() => setDiet("vegan")}/>
                                    <label className="form-check-label" for="veganCheck">Vegan</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">RSVP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rsvp;