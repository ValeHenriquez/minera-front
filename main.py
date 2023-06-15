import numpy as np
import pandas as pd
from sqlalchemy import create_engine

# Crea un DataFrame de ejemplo
data = {'Nombre': ['Juan', 'María', 'Pedro'],
        'Edad': [25, 30, 35]}
df = pd.DataFrame(data)

# Realiza un cálculo utilizando NumPy
promedio = np.mean(df['Edad'])


print(f"El promedio de edad es: {promedio}")
