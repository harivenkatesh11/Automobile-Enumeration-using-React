import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling
function App() {
  const [parkingFloors, setParkingFloors] = useState([
    { floorNumber: 1, leftSlots: Array(5).fill(false), rightSlots: Array(5).fill(false) },
    { floorNumber: 2, leftSlots: Array(5).fill(false), rightSlots: Array(5).fill(false) },
  ]);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const parkCar = (floorIndex, side, slotIndex) => {
    const updatedParkingFloors = [...parkingFloors];
    updatedParkingFloors[floorIndex][side][slotIndex] = true;
    setParkingFloors(updatedParkingFloors);
  };
  const leaveParking = (floorIndex, side, slotIndex) => {
    const updatedParkingFloors = [...parkingFloors];
    updatedParkingFloors[floorIndex][side][slotIndex] = false;
    setParkingFloors(updatedParkingFloors);
  };
  const handleFloorsClick = () => {
    setSelectedFloor(selectedFloor === null ? 1 : null);
  };
  const handleBackClick = () => {
    setSelectedFloor(null);
  };
  const handleNextPageClick = () => {
    setSelectedFloor(selectedFloor === 1 ? 2 : null);
  };
  return (
    <div className="App">
      {selectedFloor === null ? (
        <div className="container">
          <div className="title">Automobile Enumeration</div>
          <div className="block">S Block</div>
          <div className="name-box">Total No Slots <input type="NUMBER" placeholder="" /></div>
          <div className="name-box">occupied Slots <input type="NUMBER" placeholder="" /></div>
          <div className="name-box">Available Slots <input type="NUMBER" placeholder="" /></div>
          <div className="floor-container">
            <button className="floors-button" onClick={handleFloorsClick}>Floors</button>
          </div>
        </div>
      ) : (
        <div className='floor'>
        <div className="App">
          <button className="back-button" onClick={handleBackClick}>← Back</button>
          <h1>Floor {selectedFloor}</h1>
          <div className="parking">
            {/* Left side parking slots */}
            <div className="left-side">
              <div className="slot-container">
                {parkingFloors[selectedFloor - 1].leftSlots.map((isOccupied, index) => (
                  <div
                    key={index}
                    className={isOccupied ? 'slot occupied' : 'slot vacant'}
                    onClick={() =>
                      isOccupied
                        ? leaveParking(selectedFloor - 1, 'leftSlots', index)
                        : parkCar(selectedFloor - 1, 'leftSlots', index)
                    }
                  >
                    Floor {selectedFloor} Slot {index + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Road separator */}
            <div className="road"></div>
            {/* Right side parking slots */}
            <div className="right-side">
              <div className="slot-container">
                {parkingFloors[selectedFloor - 1].rightSlots.map((isOccupied, index) => (
                  <div
                    key={index}
                    className={isOccupied ? 'slot occupied' : 'slot vacant'}
                    onClick={() =>
                      isOccupied
                        ? leaveParking(selectedFloor - 1, 'rightSlots', index)
                        : parkCar(selectedFloor - 1, 'rightSlots', index)
                    }
                  >
                    Floor {selectedFloor} Slot {index + 6}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {selectedFloor === 1 && (
            <button className="next-button" onClick={handleNextPageClick}>
              Next Page →
            </button>
          )}
        </div>
        </div>
      )}
    </div>
  );
}
export default App;
