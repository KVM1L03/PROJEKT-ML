# 🏥 Aplikacja do Monitorowania Zdrowia 🛌

Witaj w naszej **Aplikacji do Monitorowania Zdrowia**! Aplikacja ta pomaga użytkownikom monitorować swoje zdrowie, przewidując ryzyko chorób sercowo-naczyniowych (CVD) oraz oceniając jakość snu. Aplikacja została zbudowana przy użyciu **React** do frontendu, **Flask** do backendu oraz dwóch wytrenowanych modeli uczenia maszynowego: **Regresji Logistycznej** do przewidywania ryzyka CVD i **Random Forest** do przewidywania jakości snu.

## 📂 Struktura Projektu
```
├── frontend/ # Aplikacja frontendowa w React
├── backend/ # Serwer backendowy w Flask
├── models/ # Wytrenowane modele uczenia maszynowego
└── README.md # Dokumentacja projektu (tutaj jesteś!)
```


## 🚀 Funkcje

### 1. Przewidywanie Ryzyka Chorób Sercowo-Naczyniowych (CVD) ❤️

- **Dane Wejściowe**: Użytkownicy mogą wprowadzać swoje pomiary zdrowotne (np. wagę, ciśnienie krwi).
- **Predykcja**: Aplikacja przewiduje, czy użytkownik ma **niskie** czy **wysokie** ryzyko chorób sercowo-naczyniowych, wykorzystując model **Regresji Logistycznej**.
- **Wykresy**: Pod predykcją użytkownicy mogą zobaczyć interaktywne wykresy przedstawiające ich **wagę**, **ciśnienie rozkurczowe** i **skurczowe** na przestrzeni czasu.

### 2. Przewidywanie Jakości Snu 🌙

- **Dane Wejściowe**: Użytkownicy mogą wprowadzać dane związane ze snem (np. czas trwania snu, tętno podczas snu).
- **Predykcja**: Aplikacja przewiduje **jakość snu** użytkownika w skali od **1 do 10**, wykorzystując model **Random Forest**.
- **Wykresy**: Pod predykcją użytkownicy mogą zobaczyć interaktywny wykres przedstawiający ich **jakość snu** na przestrzeni czasu.

## 🛠️ Użyte Technologie

- **Frontend**: React
- **Backend**: Flask (Python)
- **Uczenie Maszynowe**:
  - Regresja Logistyczna (Przewidywanie Ryzyka CVD)
  - Random Forest (Przewidywanie Jakości Snu)
- **Wizualizacja Danych**: Interaktywne wykresy do śledzenia metryk zdrowotnych w czasie.

## 🖥️ Zrzuty Ekranu

### Ekran Przewidywania Ryzyka CVD
![Przewidywanie Ryzyka CVD](https://via.placeholder.com/600x400?text=Ekran+Przewidywania+Ryzyka+CVD)

### Ekran Przewidywania Jakości Snu
![Przewidywanie Jakości Snu](https://via.placeholder.com/600x400?text=Ekran+Przewidywania+Jakości+Snu)

## 🚀 Jak Zacząć

### Wymagania Wstępne

- Node.js (do frontendu w React)
- Python (do backendu w Flask)
- Wymagane pakiety Pythona (wymienione w `requirements.txt`)

### Instalacja

1. **Sklonuj repozytorium**:
   ```bash
   git clone https://github.com/twoja-nazwa-użytkownika/aplikacja-monitorujaca-zdrowie.git
   cd aplikacja-monitorujaca-zdrowie
   ```

   ```bash
   cd frontend
   npm install
   npm start
   ```

   ```bash
   cd ../backend
   pip install -r requirements.txt
   python app.py
   ```
2. **Uruchom modele:**

    * Upewnij się, że modele są poprawnie załadowane w backendzie.

    * Backend będzie obsługiwał predykcje na podstawie danych wprowadzonych przez użytkownika.

3. **Uruchom aplikację:**

    * Otwórz przeglądarkę i przejdź do http://localhost:3000, aby korzystać z aplikacji.

## Stworzone przez:

* Kamil Labus
* Dawid Krawczyk
