openapi: 3.0.0
info:
  title: Contruçao de Software
  contact: {}
  version: '1.0'
servers:
  - url: 'https://18.230.151.22:3000'
    variables: {}
paths:
  /disciplina:
    post:
      tags:
        - Disciplina
      summary: POST disciplina
      operationId: POSTdisciplina
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/POSTdisciplinaRequest'
            example:
              nome: Contrução de Software
              curso: 507f191e810c19729de860ea
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    get:
      tags:
        - Disciplina
      summary: GET disciplinas
      description: Endpoint para busca de disciplinas
      operationId: GETdisciplinas
      parameters:
        - name: curso
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: 507f191e810c19729de860ea
        - name: nome
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: Contrução de Software
      responses:
        '200':
          description: ''
          headers: {}
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/GETdisciplinaRequest'
              example:
                - _id: 5eb98ad56d05cd3b1ebd1448
                  nome: Contrução de Software
                  curso: 507f191e810c19729de860ea
                  createdAt: '2020-05-11T17:26:45.455Z'
                  updatedAt: '2020-05-11T17:26:45.456Z'
                  id: 5eb98ad56d05cd3b1ebd1448
      deprecated: false
  '/disciplina/<:id>':
    get:
      tags:
        - Disciplina
      summary: 'GET disciplinas/:id'
      operationId: 'GETdisciplinas/:id'
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GETdisciplinaRequest'
              example:
                _id: 5eb98ad56d05cd3b1ebd1448
                nome: Contrução de Software
                curso: 507f191e810c19729de860ea
                createdAt: '2020-05-11T17:26:45.455Z'
                updatedAt: '2020-05-11T17:26:45.456Z'
                id: 5eb98ad56d05cd3b1ebd1448
      deprecated: false
    delete:
      tags:
        - Disciplina
      summary: DELETE discliplina
      operationId: DELETEdiscliplina
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    put:
      tags:
        - Disciplina
      summary: PUT disciplina
      operationId: PUTdisciplina
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PUTdisciplinaRequest'
            example:
              nome: Contrução de Software - Put
              curso: 507f191e810c19729de860ef
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    patch:
      tags:
        - Disciplina
      summary: PATCH Disciplina
      operationId: PATCHDisciplina
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PATCHDisciplinaRequest'
            example:
              nome: Contrução de Software - Patch
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
  /turma:
    post:
      tags:
        - Turma
      summary: POST turma
      operationId: POSTturma
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/POSTturmaRequest'
            example:
              numero: 127
              horario: '2020-05-06T17:59:19.534Z'
              professor: 507f191e810c19729de860ea
              disciplina: 5eb2faf75172fa3dce8f6933
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    get:
      tags:
        - Turma
      summary: GET turma
      operationId: GETturma
      parameters:
        - name: numero
          in: query
          style: form
          explode: true
          schema:
            type: integer
            format: int32
            example: 127
        - name: horario
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: '05/06/2020 17:59:19'
        - name: minHorario
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: '05/06/2018 17:59:19'
        - name: maxHorario
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: '05/06/2020 17:59:19'
        - name: professor
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: 507f191e810c19729de860ea
        - name: disciplina
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: 5eb2faf75172fa3dce8f6933
      responses:
        '200':
          description: ''
          headers: {}
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/GETturmaRequest'
              example:
                - _id: 5eb9927ff771b340d633f2d3
                  numero: 127
                  horario: '2020-05-06T17:59:19.534Z'
                  professor: 507f191e810c19729de860ea
                  disciplina: 5eb2faf75172fa3dce8f6933
                  createdAt: '2020-05-11T17:59:27.360Z'
                  updatedAt: '2020-05-11T17:59:27.360Z'
                  id: 5eb9927ff771b340d633f2d3
      deprecated: false
  '/turma/<:id>':
    get:
      tags:
        - Turma
      summary: 'GET turma/:id'
      operationId: 'GETturma/:id'
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    delete:
      tags:
        - Turma
      summary: DELETE turma
      operationId: DELETEturma
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    put:
      tags:
        - Turma
      summary: PUT turma
      operationId: PUTturma
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PUTturmaRequest'
            example:
              numero: 423
              horario: '2020-05-06T19:59:19.534Z'
              professor: 507f191e810c19729de860ef
              disciplina: 5eb2faf75172fa3dce8f6973
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    patch:
      tags:
        - Turma
      summary: PATCH turma
      operationId: PATCHturma
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PATCHturmaRequest'
            example:
              numero: 423
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
  /aula:
    post:
      tags:
        - Aula
      summary: POST aula
      operationId: POSTaula
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/POSTaulaRequest'
            example:
              diaHora: '2020-05-06T17:59:19.534Z'
              turma: 5eb304bc04ff0d4534f9f3a1
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    get:
      tags:
        - Aula
      summary: GET aula
      operationId: GETaula
      parameters:
        - name: turma
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: 5eb304bc04ff0d4534f9f3a1
        - name: maxDiaHora
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: '05/06/2020 17:59:19'
        - name: minDiaHora
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: '05/06/2018 17:59:19'
        - name: diaHora
          in: query
          style: form
          explode: true
          schema:
            type: string
            example: '05/06/2020 17:59:19'
      responses:
        '200':
          description: ''
          headers: {}
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/GETaulaRequest'
              example:
                - _id: 5eb96ce67c26492e3a8489ea
                  diaHora: '2020-05-06T17:59:19.534Z'
                  turma: 5eb304bc04ff0d4534f9f3a1
                  createdAt: '2020-05-11T15:19:02.410Z'
                  updatedAt: '2020-05-11T15:19:02.410Z'
                  id: 5eb96ce67c26492e3a8489ea
                - _id: 5eb9728321b1a031add209c8
                  diaHora: '2018-05-06T17:59:19.534Z'
                  turma: 5eb304bc04ff0d4534f9f3a1
                  createdAt: '2020-05-11T15:42:59.460Z'
                  updatedAt: '2020-05-11T15:42:59.460Z'
                  id: 5eb9728321b1a031add209c8
      deprecated: false
  '/aula/<:id>':
    get:
      tags:
        - Aula
      summary: 'GET aula/:id'
      operationId: 'GETaula/:id'
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    delete:
      tags:
        - Aula
      summary: DELETE aula
      operationId: DELETEaula
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    put:
      tags:
        - Aula
      summary: PUT aula
      operationId: PUTaula
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PUTaulaRequest'
            example:
              diaHora: '2020-05-06T19:59:19.534Z'
              turma: 5eb304bc04ff0d4534f9f3a7
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
    patch:
      tags:
        - Aula
      summary: PATCH aula
      operationId: PATCHaula
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PATCHaulaRequest'
            example:
              diaHora: '2020-05-06T19:59:19.534Z'
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
components:
  schemas:
    POSTdisciplinaRequest:
      title: POSTdisciplinaRequest
      required:
        - nome
        - curso
      type: object
      properties:
        nome:
          type: string
        curso:
          type: string
      example:
        nome: Contrução de Software
        curso: 507f191e810c19729de860ea
    PUTdisciplinaRequest:
      title: PUTdisciplinaRequest
      required:
        - nome
        - curso
      type: object
      properties:
        nome:
          type: string
        curso:
          type: string
      example:
        nome: Contrução de Software - Put
        curso: 507f191e810c19729de860ef
    PATCHDisciplinaRequest:
      title: PATCHDisciplinaRequest
      required:
        - nome
      type: object
      properties:
        nome:
          type: string
      example:
        nome: Contrução de Software - Patch
    POSTturmaRequest:
      title: POSTturmaRequest
      required:
        - numero
        - horario
        - professor
        - disciplina
      type: object
      properties:
        numero:
          type: integer
          format: int32
        horario:
          type: string
        professor:
          type: string
        disciplina:
          type: string
      example:
        numero: 127
        horario: '2020-05-06T17:59:19.534Z'
        professor: 507f191e810c19729de860ea
        disciplina: 5eb2faf75172fa3dce8f6933
    PUTturmaRequest:
      title: PUTturmaRequest
      required:
        - numero
        - horario
        - professor
        - disciplina
      type: object
      properties:
        numero:
          type: integer
          format: int32
        horario:
          type: string
        professor:
          type: string
        disciplina:
          type: string
      example:
        numero: 423
        horario: '2020-05-06T19:59:19.534Z'
        professor: 507f191e810c19729de860ef
        disciplina: 5eb2faf75172fa3dce8f6973
    PATCHturmaRequest:
      title: PATCHturmaRequest
      required:
        - numero
      type: object
      properties:
        numero:
          type: integer
          format: int32
      example:
        numero: 423
    POSTaulaRequest:
      title: POSTaulaRequest
      required:
        - diaHora
        - turma
      type: object
      properties:
        diaHora:
          type: string
        turma:
          type: string
      example:
        diaHora: '2020-05-06T17:59:19.534Z'
        turma: 5eb304bc04ff0d4534f9f3a1
    PUTaulaRequest:
      title: PUTaulaRequest
      required:
        - diaHora
        - turma
      type: object
      properties:
        diaHora:
          type: string
        turma:
          type: string
      example:
        diaHora: '2020-05-06T19:59:19.534Z'
        turma: 5eb304bc04ff0d4534f9f3a7
    PATCHaulaRequest:
      title: PATCHaulaRequest
      required:
        - diaHora
      type: object
      properties:
        diaHora:
          type: string
      example:
        diaHora: '2020-05-06T19:59:19.534Z'
    GETdisciplinaRequest:
      title: GETdisciplinaRequest
      required:
        - nome
        - curso
        - _id
        - createdAt
        - updatedAt
      type: object
      properties:
        nome:
          type: string
        curso:
          type: string
        _id:
          type: string
        createdAt:
          type: string
        updatedAt:
          type: string
      example:
        _id: 5eb98ad56d05cd3b1ebd1448
        nome: Contrução de Software
        curso: 507f191e810c19729de860ea
        createdAt: '2020-05-11T17:26:45.455Z'
        updatedAt: '2020-05-11T17:26:45.456Z'
    GETturmaRequest:
      title: GETturmaRequest
      required:
        - numero
        - horario
        - professor
        - disciplina
        - createdAt
        - updatedAt
        - _id
      type: object
      properties:
        numero:
          type: integer
          format: int32
        horario:
          type: string
        professor:
          type: string
        disciplina:
          type: string
        createdAt:
          type: string
        updatedAt:
          type: string
        _id:
          type: string
      example:
        _id: 5eb9927ff771b340d633f2d3
        numero: 127
        horario: '2020-05-06T17:59:19.534Z'
        professor: 507f191e810c19729de860ea
        disciplina: 5eb2faf75172fa3dce8f6933
        createdAt: '2020-05-11T17:59:27.360Z'
        updatedAt: '2020-05-11T17:59:27.360Z'
    GETaulaRequest:
      title: GETaulaRequest
      required:
        - diaHora
        - turma
        - createdAt
        - updatedAt
        - _id
      type: object
      properties:
        diaHora:
          type: string
        turma:
          type: string
        createdAt:
          type: string
        updatedAt:
          type: string
        _id:
          type: string
      example:
        _id: 5eb96ce67c26492e3a8489ea
        diaHora: '2020-05-06T17:59:19.534Z'
        turma: 5eb304bc04ff0d4534f9f3a1
        createdAt: '2020-05-11T15:19:02.410Z'
        updatedAt: '2020-05-11T15:19:02.410Z'
tags:
  - name: Disciplina
  - name: Turma
  - name: Aula
