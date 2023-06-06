import pandas as pd
import sqlalchemy



df= pd.read_csv('datos-etl\DatosEjemploDiciembre2.csv',sep=';', encoding= 'unicode_escape')

fecha_Ciclos = df[['Fecha','Ciclos']].copy()


engine = sqlalchemy.create_engine('postgresql://postgres:123456@localhost:5432/next-test')

fecha_Ciclos.to_sql('tabla2fechaciclos',engine,if_exists='replace')

