function bunnyKill(input) {
    let coordinates = input[input.length - 1].split(/[,\s*]/g).map(Number)
    let matrix = []
    let killedBunnies = 0
    let damage = 0
    for (let i = 0; i < input.length - 1; i++) {
        matrix[i] = input[i].split(' ').map(Number)
    }
    for (let i = 0; i < coordinates.length; i += 2) {
        let x = Number(coordinates[i])
        let y = Number(coordinates[i + 1])
        damage += Number(matrix[x][y])
        killedBunnies += 1
        for (let j = 0; j < matrix.length; j++) {
            for (let n = 0; n < matrix[j].length; n++) {
                if (j == x && n == y) {
                    if (n + 1 < matrix[j].length) {
                        matrix[j][n + 1] = matrix[j][n + 1] - matrix[x][y]
                    }
                    if (n - 1 >= 0) {
                        matrix[j][n - 1] = matrix[j][n - 1] - matrix[x][y]
                    }
                    if (j - 1 >= 0 && n - 1 >= 0) {
                        matrix[j - 1][n - 1] = matrix[j - 1][n - 1] - matrix[x][y]
                    }
                    if (j - 1 >= 0) {
                        matrix[j - 1][n] = matrix[j - 1][n] - matrix[x][y]
                    }
                    if (j - 1 >= 0 && n + 1 <= matrix[j].length) {
                        matrix[j - 1][n + 1] = matrix[j - 1][n + 1] - matrix[x][y]
                    }
                    if (j + 1 <= matrix.length && n - 1 >= 0) {
                        matrix[j + 1][n - 1] = matrix[j + 1][n - 1] - matrix[x][y]
                    }
                    if (j + 1 <= matrix.length) {
                        matrix[j + 1][n] = matrix[j + 1][n] - matrix[x][y]
                    }
                    if (j + 1 <= matrix.length && n + 1 <= matrix[j].length) {
                        matrix[j + 1][n + 1] = matrix[j + 1][n + 1] - matrix[x][y]
                    }
                    matrix[j][n] = 0
                }
                else
                    continue;
            }
        }
    }

    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] > 0) {
                damage += matrix[i][j]
                killedBunnies += 1
            }
        }
    }
    console.log(damage)
    console.log(killedBunnies)
}
bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
])