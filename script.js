let backgroundColors = ["#414a4c", "#353839", "#232b2b"]
    const colorChanger = () => {
      let colorSelection = document.body.style.backgroundColor = backgroundColors[2];
      let colorText = document.getElementById("backgroundText").style.backgroundColor = "transparent";
      let colorTextTwo = document.getElementById("backgroundText").style.backgroundColor = "transparent";
      return colorSelection && colorText && colorTextTwo;
    }

    let colorReset = "#fff";
    const colorChangerTwo = () => {
      let colorSelection = document.body.style.backgroundColor = colorReset;
      return colorSelection;
    }