% lista de doencas em ordem decrescente (maior probabilidade => menor probabilidade)
% doenca(nome_doenca, probabilidade)
% probabilidade -> [0, 1]

doenca(enxaqueca, 0.8).
doenca(acne, 0.7).
doenca(dengue, 0.6).
doenca(herpes, 0.6).
doenca(asma, 0.5).
doenca(anemia, 0.5).
doenca(hemorroidas, 0.4).
doenca(gastrite, 0.4).
doenca(hipertensao, 0.4).
doenca(tuberculose, 0.3).
doenca(diabetes, 0.3).
doenca(artrite, 0.3).
doenca(osteoporose, 0.2).
doenca(hepatite, 0.2).
doenca(alzheimer, 0.1).

% lista de sintomas agrupados pela lista acima de doenças
% sintoma(doenca, nome_sintoma)

sintoma(enxaqueca, dor_de_cabeca).
sintoma(enxaqueca, sensibilidade_a_luz).
sintoma(enxaqueca, nausea).

sintoma(acne, cravos_e_espinhas).
sintoma(acne, inflamacao_na_pele).
sintoma(acne, dor_na_pele).

sintoma(dengue, febre_alta).
sintoma(dengue, dor_de_cabeca).
sintoma(dengue, dor_no_corpo).

sintoma(herpes, bolhas_na_pele).
sintoma(herpes, dor_na_pele).
sintoma(herpes, coceira).

sintoma(asma, falta_de_ar).
sintoma(asma, chiado_no_peito).
sintoma(asma, tosse_seca).

sintoma(anemia, fadiga).
sintoma(anemia, palidez).
sintoma(anemia, falta_de_ar).

sintoma(hemorroidas, sangramento_ao_evacuar).
sintoma(hemorroidas, dor_ao_evacuar).
sintoma(hemorroidas, coceira_anal).

sintoma(gastrite, dor_no_estomago).
sintoma(gastrite, nausea).
sintoma(gastrite, azia).

sintoma(hipertensao, dor_de_cabeca).
sintoma(hipertensao, tontura).
sintoma(hipertensao, visao_turva).

sintoma(tuberculose, tosse_persistente).
sintoma(tuberculose, febre).
sintoma(tuberculose, perda_de_peso).

sintoma(diabetes, aumento_da_sede).
sintoma(diabetes, aumento_da_urina).
sintoma(diabetes, fadiga).

sintoma(artrite, dor_nas_articulacoes).
sintoma(artrite, inchaco_nas_articulacoes).
sintoma(artrite, rigidez_articular).

sintoma(osteoporose, dor_ossea).
sintoma(osteoporose, fraturas_frequentes).
sintoma(osteoporose, diminuicao_da_altura).

sintoma(hepatite, ictericia).
sintoma(hepatite, dor_abdominal).
sintoma(hepatite, fadiga).

sintoma(alzheimer, perda_de_memoria).
sintoma(alzheimer, dificuldade_de_concentracao).
sintoma(alzheimer, mudancas_de_humor).
