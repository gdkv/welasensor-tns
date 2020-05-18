export function fetchData() {
    fetch('http://192.168.0.103:8000/api/test')
          .then(response => response.json())
          .then(data => {
            alert(data.message);
          })
}