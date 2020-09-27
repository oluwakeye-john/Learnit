export const tabIcon = (route: string) => {
  let name;
  switch (route) {
    case "Home":
      name = "home";
      break;
    case "Profile":
      name = "person";
      break;
    case "Settings":
      name = "settings";
      break;
    default:
      name = "star";
  }
  return name;
};
