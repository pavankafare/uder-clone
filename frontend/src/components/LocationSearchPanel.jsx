import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    // const handleSuggestionClick = (suggestion) => {
    //     if (activeField === 'pickup') {
    //         setPickup(suggestion)
    //     } else if (activeField === 'destination') {
    //         setDestination(suggestion)
    //     }
    //     setVehiclePanel(true)
    //     setPanelOpen(false)
    // }

    const locations = ["Jaitubi chawl no-1 room no-5,Tagor Nagar no-1 Vikhroli East,Mumbai 40008", "Jaitubi chawl no-1 room no-5,Tagor Nagar no-1 Vikhroli East,Mumbai 40008", "Jaitubi chawl no-1 room no-5,Tagor Nagar no-1 Vikhroli East,Mumbai 40008", "Jaitubi chawl no-1 room no-5,Tagor Nagar no-1 Vikhroli East,Mumbai 40008", "Jaitubi chawl no-1 room no-5,Tagor Nagar no-1 Vikhroli East,Mumbai 40008"]

    return (<>
        {
            locations.map(function (i) {
                return (
                    <div key={i} onClick={() => {
                        setVehiclePanel(true)
                        setPanelOpen(false)
                    }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'> Jaitubi chawl no-1 room no-5,Tagor Nagar no-1 Vikhroli East,Mumbai 40008 </h4>
                    </div>
                )
            })
        }

    </>

    )
}

export default LocationSearchPanel