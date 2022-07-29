function dangerCode1() {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  eval(params);
}

function dangerCode2() {
  location.href = "/danger/1/show?param=" + param;
}
