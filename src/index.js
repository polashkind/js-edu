/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = { family: 4 }
) {
  const defaultHours = 800;
  const additionalHours = 500;
  const hours = knowsProgramming ? defaultHours : defaultHours + additionalHours;
  const weeks = Math.ceil(hours / config [focus]);

  return weeks;
};
  