function formattingRoutes (routes) {
  for (let i = 0; i < routes.length; i++) {
    routes.path = routes.path + '*';
  }
}

export default formattingRoutes;
