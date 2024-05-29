import React, { useState } from 'react';
import Card from "@mui/material/Card";
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import DoneIcon from '@mui/icons-material/Done';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import { dummyData } from '../jsondata/jsonFile';
import "../styles/Tools.css";




const Tools = () => {

  const [searchValue, setSearchValue] = useState('');
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [originalData, setOriginalData] = useState(dummyData);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const filtered = originalData.filter((data) =>
      data.filename.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filtered.length === 0) {
      alert('No matches found');
      setSearchValue(''); 
    }
   
    setFilteredData(filtered);
  };
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (!value) {
      setFilteredData([]);
    }
  };


  const buttonOnClickHandler = (index) => {
    setActiveButtonIndex(index);
  };

  const firstSetButtons = [
    'All Tools',
    'Agent Tools',
    'Chip Compo',
    'Chip Compo',
    'Chip Compo',
    'Chip Compo',
    'Chip Compo',
    'Chip Compo',
  ];
  const secondSetButtons = [
    'Chip Compo',
    'Chip Compo',
    'Chip Compo',
  ];



  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };
  return (
    <div>
      <div className='tools-container py-4'>
        <Card className='customCard d-flex justify-content-center align-items-center' sx={{ boxShadow: 'none', borderRadius: '10px' }}>
          <div className="searchbar-container p-4">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Tools"
              value={searchValue}
              onChange={handleSearchInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Card>
      </div>
      <div>
        <Card className='customCard' sx={{ boxShadow: 'none', borderRadius: '10px' }}>
          <div className="button-row d-flex justify-content-center align-items-end p-3">
            {firstSetButtons.map((label, index) => (
              <button
                key={index}
                className={`px-3 py-1 me-3 ${activeButtonIndex === index ? 'toolsbtnActive' : 'toolsbtnInActive'}`}
                onClick={() => buttonOnClickHandler(index)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="button-row d-flex justify-content-center align-items-end">
            {secondSetButtons.map((label, index) => (
              <button
                key={index + firstSetButtons.length}
                className={`px-3 py-1 me-5 ${activeButtonIndex === index + firstSetButtons.length ? 'toolsbtnActive' : 'toolsbtnInActive'}`}
                onClick={() => buttonOnClickHandler(index + firstSetButtons.length)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className='py-4 userDetailsCardParentContainer'>
            {filteredData.length > 0 ? (
              // Render filtered data if search results are present
              filteredData.map((data, index) => (
                <Card
                  key={index}
                  className='userDetailsCard'
                  sx={{
                    boxShadow: 'none',
                    border: selectedCardIndex === index ? '1.5px solid black' : '2px solid #dfcfcf',
                    cursor: 'pointer',
                    borderRadius: "20px"
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className='d-flex justify-content-between p-3'>
                    <h5 className='textStyleFileName'>{data.filename}</h5>
                    <div>
                      {data.verified ? <button className='verifiedButton'>
                        <DoneIcon 
                         sx={{
                          fontSize:"1rem",
                          marginRight:"0.5rem",
                        }}
                        />
                        verified</button>

                        : null}
                      <button className='agentButton'>Agent</button>
                    </div>
                  </div>
                  <div className='d-flex p-3 justify-content-between py-3'>
                    <div>
                      <PersonSearchIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.username}</div>
                    <div>
                      <StarIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.rating}</div>
                    <div>
                      <DownloadIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.downloads}</div>
                    <div>
                      <TimelapseIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.timeAgo}</div>
                  </div>
                </Card>
              ))
            ) : (
              originalData.map((data, index) => (
                <Card
                  key={index}
                  className='userDetailsCard'
                  sx={{
                    boxShadow: 'none',
                    border: selectedCardIndex === index ? '1.5px solid black' : '2px solid #dfcfcf',
                    cursor: 'pointer',
                    borderRadius: "20px"
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className='d-flex justify-content-between p-3'>
                    <h5 className='textStyleFileName'>{data.filename}</h5>
                    <div>
                      {data.verified ? <button className='verifiedButton'>
                        <DoneIcon 
                        sx={{
                          fontSize:"1rem",
                          marginRight:"0.5rem"
                        }}
                        />
                        verified</button>
                        : null}
                      <button className='agentButton textStyle'>Agent</button>
                    </div>
                  </div>
                  <div className='d-flex p-3 justify-content-between py-3'>
                    <div>
                      <PersonSearchIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.username}</div>
                    <div>
                      <StarIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.rating}</div>
                    <div>
                      <DownloadIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.downloads}</div>
                    <div>
                      <TimelapseIcon />
                    </div>
                    <div className='userDetailsSection textStyle'>{data.timeAgo}</div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Tools