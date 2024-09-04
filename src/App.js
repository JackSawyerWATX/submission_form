// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./App.css";
import { React, useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] =
        useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };
    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="App">
            <h1>Submission Form</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="firstname">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required
                    />
                    <label for="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                        required
                    />
                    <label for="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    <label for="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                        required
                    />
                    <label for="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                    <label for="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english === true}
                        onChange={(e) =>
                            handleSubjectChange("english")
                        }
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths === true}
                        onChange={(e) =>
                            handleSubjectChange("maths")
                        }
                    />
                    Math
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics
                    <label for="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setResume(e.target.files[0])
                        }
                        placeholder="Enter Upload File"
                        required
                    />
                    <label for="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter url"
                        required
                    />
                    <label>What Are Your Coding Strengths in Web Development?</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your Answer
                        </option>
                        <optgroup label="Front End">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Frameworks">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                        </optgroup>
                        <optgroup label="Backend Software">
                            <option value="8">Python</option>
                            <option value="9">Java</option>
                            <option value="10">C++</option>
                            <option value="10">C#</option>
                            <option value="11">Scala</option>
                        </optgroup>
                        <optgroup label="Database">
                            <option value="12">MySQL</option>
                            <option value="13">PostgreSQL</option>
                            <option value="14">MongoDB</option>
                        </optgroup>
                        <optgroup label="Webhosting">
                            <option value="15">Netlify</option>
                            <option value="16">Heroku</option>
                            <option value="17">GitHub Pages</option>
                            <option value="18">Vercel</option>
                            <option value="19">Render</option>
                        </optgroup>
                        <optgroup label="Cloud Computing">
                            <option value="19">AWS</option>
                            <option value="20">Azure</option>
                            <option value="21">Google Cloud</option>
                            <option value="22">IBM Cloud</option>
                        </optgroup>
                        <optgroup label="Version Control">
                            <option value="23">Git</option>
                            <option value="24">GitHub</option>
                            <option value="25">Bitbucket</option>
                            <option value="26">SVN</option>
                        </optgroup>
                        <optgroup label="IDEs and Editors">
                            <option value="27">Visual Studio Code</option>
                            <option value="28">Sublime Text</option>
                            <option value="29">Atom</option>
                            <option value="30">Jupyter Notebook</option>
                            <option value="31">Google Colab</option>
                        </optgroup>
                        <optgroup label="Mobile Development">
                            <option value="32">React Native</option>
                            <option value="33">Flutter</option>
                            <option value="34">Swift</option>
                            <option value="35">Kotlin</option>
                        </optgroup>
                        <optgroup label="Game Development">
                            <option value="36">Unity</option>
                            <option value="37">Unreal Engine</option>
                            <option value="38">Cocos2D</option>
                            <option value="39">GameMaker Studio</option>
                        </optgroup>
                        <optgroup label="Other">
                            <option value="47">Stack Overflow</option>
                            <option value="48">LeetCode</option>
                            <option value="49">CodePen</option>
                            <option value="50">Codecademy</option>
                            <option value="51">W3Schools</option>
                            <option value="52">MDN Web Docs</option>
                        </optgroup>
                    </select>
                    <label for="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About your self"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
