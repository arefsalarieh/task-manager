const spellCheckText = async (text) => {
    const gatewayToken = import.meta.env.REACT_APP_GATEWAY_TOKEN; // خواندن توکن از .env
    try {
      const response = await fetch(
        "https://dadmatech.gw.isahab.ir/spellchecker/v1/spell-checking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "gateway-token": gatewayToken,
          },
          body: JSON.stringify({
            texts: text,
            new_frontend: 1,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return { success: true, output: data };
    } catch (error) {
      console.error("خطا:", error.message);
      return { success: false, error: error.message };
    }
  };
  
  export default spellCheckText;
  