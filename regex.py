import re
regex = r'(\d\d)(\w)'
alvo = '11a22b33c'

# resultado = re.search(regex, alvo)
# print(resultado.group(2))

# resultados = re.findall(regex, alvo)
# print(resultados)

for r in re.finditer(regex, alvo):
    print(f'{r.group()} [1: {r.group(1)}, 2: {r.group(2)}] [start: {r.start()}, end: {r.end()}]')