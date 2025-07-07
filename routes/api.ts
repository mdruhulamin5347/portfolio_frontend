const backendURL = process.env.NEXT_PUBLIC_BackendURL;
export const HomeApiFetch = async () => {
    try {
        const response = await fetch(`${backendURL}home/`);
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

