const backendURL = process.env.NEXT_PUBLIC_BackendURL;
export const HomeApiFetch = async () => {
    try {
        const response = await fetch(`${backendURL}/home/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching home data:", error);
        return null;
    }
}



export const aboutAPIFetch = async () => {
  try {
    const response = await fetch(`${backendURL}/about/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add Authorization header if needed
      },
    });

    if (!response.ok) {
      console.error(`API error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch About data:', error);
    return null;
  }
};



export const educationAPIFetch = async ()=>{
    const response = await fetch(`${backendURL}/education/`);
    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}




export const courseAPIFetch = async ()=>{
    const response = await fetch(`${backendURL}/certification/`);
    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}


export const skillsAPIFetch = async ()=> {
    const response = await fetch(`${backendURL}/skills/`);
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}


export const workExperinceAPIFetch = async ()=>{
    const response = await fetch(`${backendURL}/experience/`);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}


export const serviceAPIFetch = async ()=>{
    const response = await fetch(`${backendURL}/services/`);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export const projectAPIFetch = async ()=>{
    const response = await fetch(`${backendURL}/projects/`);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export const contactInfoAPIFetch = async ()=>{
    const response = await fetch(`${backendURL}/location/`);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}


export const contactSubmitAPI = async () => {
  try {
    const response = await fetch(`${backendURL}/messages/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add Authorization header if needed
      },
    });

    if (!response.ok) {
      console.error(`API error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch About data:', error);
    return null;
  }
};
