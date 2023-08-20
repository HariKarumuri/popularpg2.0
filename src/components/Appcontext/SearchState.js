import React,{useEffect,useState} from 'react'
import SearchContext from './SearchContext'
import axios from "axios";
const SearchState = ({children}) => {
    const [pgs, setpgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [copypgs, setCopypgs] = useState([]);
    const [data, setData] = useState("Budget");
    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [occupancytype, setOccupancyType] = useState("");
    const [sortType, setSortType] = useState(""); 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://popularpg.in/products/");
          setpgs(response.data);
          setCopypgs(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false); // Set loading to false once data is fetched or an error occurs
        }
      };
      fetchData();
    }, []);
    const setloadingfalseafter3sec = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    let handleSearch = () => {
        console.log("handle search called")
        // Retrieve the data before the search without changing any properties
        const updatedPgs = copypgs.map((pg) => ({ ...pg }));
        setIsLoading(true);
        // Filter the pgs based on the selected value from the dropdown, location, occupancy type, and gender
        const filteredPgs = updatedPgs.filter((pg) => {
          const val = parseInt(pg.min_price);
          const dataval = parseInt(data);
          const minVal = parseInt(minValue);
          const maxVal = parseInt(maxValue);
          const lowercasePgLocation = pg.city.toLowerCase();
          const lowercaseSearchLocation = location.toLowerCase();
          
          const occupancyTypeMatch = () => {
            if (occupancytype === "Single") {
              return pg.single_sharing;
            } else if (occupancytype === "Double") {
              return pg.double_sharing;
            } else if (occupancytype === "Triple") {
              return pg.triple_sharing;
            } else {
              return true; // Return true if occupancytype is not specified
            }
          };
      
          const genderType = () => {
            if (gender.toLowerCase() === "boys") {
              return pg.pg_for === "boys";
            } else if (gender.toLowerCase() === "girls") {
              return pg.pg_for === "girls";
            } else if (gender.toLowerCase() === "coliving") {
              return pg.pg_for === "coliving";
            } else {
              return true; // Return true if gender is not specified
            }
          };
      
          const locationMatch = () => {
            if (lowercaseSearchLocation) {
              return lowercasePgLocation.includes(lowercaseSearchLocation) || lowercasePgLocation.startsWith(lowercaseSearchLocation);
            } else {
              return true; // Return true if no search location is specified
            }
          };
          
          if (
            !minVal &&
            !maxVal &&
            !dataval &&
            !location &&
            occupancyTypeMatch() &&
            genderType() 
          ) {
            return true;
          }
  
          if (minVal && maxVal) {
            return (
              val >= minVal &&
              val <= maxVal &&
              locationMatch() &&
              occupancyTypeMatch() &&
              genderType()
            );
          } else if(minVal) {
            return (
              val >= minVal &&
              locationMatch() &&
              occupancyTypeMatch() &&
              genderType()
            );
          } else if (maxVal) {
            return (
              val <= maxVal &&
              locationMatch() &&
              occupancyTypeMatch() &&
              genderType()
            );
          } else if (dataval) {
            return (
              val === dataval &&
              locationMatch() &&
              occupancyTypeMatch() &&
              genderType()
            );
          }else if(location){
            return (
              locationMatch() &&
              occupancyTypeMatch() &&
              genderType()
            );
          }else if(location && occupancyTypeMatch()){
            return (
              locationMatch() &&
              occupancyTypeMatch() &&
              genderType()
            );
          }         
          return false;
        });
        
        setIsLoading(false);
        const sortedPgs = sortData(filteredPgs, sortType);
        if(filteredPgs.length===0){
          console.log("No pgs found")
          setloadingfalseafter3sec()
        }
        if (
          !location &&
          (!occupancytype || occupancytype === "occupancy Type") &&
          (!minValue || isNaN(parseInt(minValue))) &&
          (!maxValue || isNaN(parseInt(maxValue))) &&
          (gender === "Gender" || gender === "") &&
          (sortType === "sort" || sortType === "") &&
          (!data || isNaN(parseInt(data)))
        ) {
          console.log("No filters applied");
          setpgs(pgs);
          setpgs(copypgs);
        } else {
          setpgs(sortedPgs);
        }
      };
      const sortData = (data, sortType) => {
        if (sortType === "Price : Low to High") {
          return [...data].sort((a, b) => parseInt(a.min_price) - parseInt(b.min_price));
        } else if (sortType === "Price : High to Low") {
          return [...data].sort((a, b) => parseInt(b.min_price) - parseInt(a.min_price));
        }
        return data;
      };
    
  return (
    <SearchContext.Provider
    value={{
        pgs, setpgs,
        isLoading, setIsLoading,
        copypgs, setCopypgs,
        setloadingfalseafter3sec,
        data, setData,
        minValue, setMinValue,
        maxValue, setMaxValue,
        location, setLocation,
        gender, setGender,
        occupancytype, setOccupancyType,
        sortType, setSortType,
        handleSearch
    }}
    >
     {children}
    </SearchContext.Provider>
  )
}

export default SearchState