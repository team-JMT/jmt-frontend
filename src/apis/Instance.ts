import axios from 'axios';

export const Instance = axios.create({
  baseURL: 'https://api.jmt-matzip.dev',
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiTUVNQkVSIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImV4cCI6MTcwNzY0MjgzNH0.hQF0XNOcg6vYS-brtciaGd6eCbjJ1UmdN14sQbsqucJgDyslv4AeKLe0j71NH8aq0nVexBrhjm82rITFHPNTbA`,
  },
});
