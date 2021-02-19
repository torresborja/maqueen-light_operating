basic.forever(function () {
    if (input.lightLevel() > 70) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, input.lightLevel())
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, input.lightLevel())
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
})
