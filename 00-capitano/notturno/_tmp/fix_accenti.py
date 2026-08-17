import unicodedata, sys

BS = chr(92)          # backslash
GRAVE = chr(0x300)
ACUTO = chr(0x301)

def repair(text):
    out = []
    i = 0
    n = 0
    while i < len(text):
        ch = text[i]
        # caso 1: "e" + BS + BS + "u0300"  (come scritto nel frammento originale)
        if ch == BS and text[i+1:i+2] == BS and text[i+2:i+3] == 'u' and text[i+3:i+7] in ('0300', '0301'):
            comb = chr(int(text[i+3:i+7], 16))
            if out:
                out.append(unicodedata.normalize('NFC', out.pop() + comb))
                n += 1
                i += 7
                continue
        # caso 2: residuo di una riparazione parziale: BS + combining
        if ch == BS and text[i+1:i+2] in (GRAVE, ACUTO) and out:
            out.append(unicodedata.normalize('NFC', out.pop() + text[i+1]))
            n += 1
            i += 2
            continue
        # caso 3: combining nudo dopo una lettera (non composto)
        if ch in (GRAVE, ACUTO) and out:
            out.append(unicodedata.normalize('NFC', out.pop() + ch))
            n += 1
            i += 1
            continue
        out.append(ch)
        i += 1
    return ''.join(out), n

for path in sys.argv[1:]:
    s = open(path, encoding='utf-8').read()
    s2, n = repair(s)
    if n:
        open(path, 'w', encoding='utf-8').write(s2)
    residui = s2.count(GRAVE) + s2.count(ACUTO)
    accentate = sum(s2.count(c) for c in 'àèéìòùÈÀ')
    print(f'{path}: riparate={n} residui={residui} accentate={accentate}')
