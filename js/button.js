snabbt(butn, {
    position: [200, 0, 0],
  easing: function(value) {
        return Math.sin(Math.PI * value);
          }
});
