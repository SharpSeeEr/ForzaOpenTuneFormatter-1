(() => {
  const tirePressure = document.getElementsByClassName('tirePressure');

  const gears = document.getElementsByClassName('gearing');
  const camber = document.getElementsByClassName('camber');
  const toe = document.getElementsByClassName('toe');
  const caster = document.getElementsByClassName('caster');
  const antirollBars = document.getElementsByClassName('antiroll-bars');
  const springTension = document.getElementsByClassName('spring-tension');
  const rideHeight = document.getElementsByClassName('ride-height');
  const reboundStiffness = document.getElementsByClassName('rebound-stiffness');
  const bumpStiffness = document.getElementsByClassName('bump-stiffness');
  const aero = document.getElementsByClassName('aero');
  const brake = document.getElementsByClassName('brake');
  const differential = document.getElementsByClassName('differential');
  const unitsPressure = new SelectValue('units-pressure');
  const unitsSprings = new SelectValue('units-springs');
  const unitsRideHeight = new SelectValue('units-rideheight');
  const unitsDownforce = new SelectValue('units-downforce');

  const result = document.getElementById('result');

  function generateText() {
    const pressureUnit = unitsPressure.value;
    const springsUnit = unitsSprings.value;
    const rideheightUnit = unitsRideHeight.value;
    const downforceUnit = unitsDownforce.value;

    const lines = [];
    lines.push('### Generated by https://ldalvik.github.io/ForzaOpenTuneFormatter/');
    lines.push('\n');
    lines.push('Tires | Pressure');
    lines.push(':--|--:');
    lines.push(`Front | ${tirePressure[0].value} ${pressureUnit}`);
    lines.push(`Rear | ${tirePressure[1].value} ${pressureUnit}`);
    lines.push('\n');

    lines.push('Gears | Ratio');
    lines.push(':--|--:');
    lines.push(`Final drive | ${gears[0].value}`);
    for (let index = 1; index < gears.length; index++) {
      if (gears[index].value !== "") {
        lines.push(`Gear ${index} | ${gears[index].value}`);
      }
    }
    lines.push('\n');

    lines.push('Alignment | Camber');
    lines.push(':--|--:');
    lines.push(`Front | ${camber[0].value}°`);
    lines.push(`Rear | ${camber[1].value}°`);
    lines.push('\n');

    lines.push('Alignment | Toe');
    lines.push(':--|--:');
    lines.push(`Front | ${toe[0].value}°`);
    lines.push(`Rear | ${toe[1].value}°`);
    lines.push('\n');


    lines.push('Alignment | Caster');
    lines.push(':--|--:');
    lines.push(`Front Caster | ${caster[0].value}`);
    lines.push('\n');

    lines.push('Antiroll Bars | Stiffness');
    lines.push(':--|--:');
    lines.push(`Front | ${antirollBars[0].value}`);
    lines.push(`Rear | ${antirollBars[1].value}`);
    lines.push('\n');

    lines.push('Springs | Tension');
    lines.push(':--|--:');
    lines.push(`Front | ${springTension[0].value} ${springsUnit}`);
    lines.push(`Rear | ${springTension[1].value} ${springsUnit}`);
    lines.push('\n');

    lines.push('Springs | Ride Height');
    lines.push(':--|--:');
    lines.push(`Front | ${rideHeight[0].value} ${rideheightUnit}`);
    lines.push(`Rear | ${rideHeight[1].value} ${rideheightUnit}`);
    lines.push('\n');

    lines.push('Damping | Rebound Stiffness');
    lines.push(':--|--:');
    lines.push(`Front | ${reboundStiffness[0].value}`);
    lines.push(`Rear | ${reboundStiffness[1].value}`);
    lines.push('\n');

    lines.push('Damping | Bump Stiffness');
    lines.push(':--|--:');
    lines.push(`Front | ${bumpStiffness[0].value}`);
    lines.push(`Rear | ${bumpStiffness[1].value}`);
    lines.push('\n');

    if (aero[0].value !== "" && aero[1].value !== "") {
      lines.push('Aero | Downforce');
      lines.push(':--|--:');
      if (aero[0].value !== "") {
        lines.push(`Front | ${aero[0].value} ${downforceUnit}`);
      }
      if (aero[1].value !== "") {
        lines.push(`Rear | ${aero[1].value} ${downforceUnit}`);
      }
      lines.push('\n');
    }
  if (brake[0].value !== "" && brake[1].value !== "") {
     lines.push('Brake | %');
      lines.push(':--|--:');
      lines.push(`Balance | ${brake[0].value}%`);
      lines.push(`Pressure | ${brake[1].value}%`);
      lines.push('\n');
    } else {
      lines.push('Brake | %');
      lines.push(':--|--:');
      lines.push(`Balance | N/A`);
      lines.push(`Pressure | N/A`);
      lines.push('\n');
    }
    if (differential[0].value !== "" || differential[1].value !== "") {
      lines.push('Differential | Front');
      lines.push(':--|--:');
      lines.push(`Acceleration | ${differential[0].value}%`);
      lines.push(`Deceleration | ${differential[1].value}%`);
      lines.push('\n');
    }
    if (differential[2].value !== "" || differential[3].value !== "") {
      lines.push('Differential | Rear');
      lines.push(':--|--:');
      lines.push(`Acceleration | ${differential[2].value}%`);
      lines.push(`Deceleration | ${differential[3].value}%`);
      lines.push('\n');
    }

    if (differential[0].value !== "" && differential[1].value !== "" &&
      differential[2].value !== "" && differential[3].value !== "") {
      lines.push('Differential | Center');
      lines.push(':--|--:');
      lines.push(`Balance | ${differential[4].value}%`);
      lines.push('\n');
    }
    lines.push('***');
    lines.push('Text generated by https://ldalvik.github.io/ForzaOpenTuneFormatter/');
    lines.push('If you have any questions please DM u/hey-im-root or SharpSeeEr#9108 on discord');
    const text = lines.join('\n');
    result.innerHTML = text;
  }

  const button = document.getElementById('generate-button');
  button.addEventListener('click', generateText);
})();
