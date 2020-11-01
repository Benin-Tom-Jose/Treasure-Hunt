pipeline{

    agent any
    triggers{
        githubPush()
    }
    stages{
        stage('Build'){
            steps{
                echo 'Building'
            }
        }
        stage('Deploy'){
            
            steps{
                
                withCredentials([sshUserPrivateKey(credentialsId: 'ubuntu-benin', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'ubuntu')]) {
                                  script{
                                    def remote = [:]
                                    remote.name = "ubuntu"
                                    remote.host = "3.22.188.95"
                                    remote.allowAnyHosts = true
                                    remote.user = ubuntu
                                    remote.identityFile = identity

                                    sshCommand remote: remote, command: '''cd treasure-hunt-frontend/ ;
                                     git pull origin master ;
                                     docker build -t treasure_hunt-frontend . ;
                                     docker rm -f treasure_hunt-app || true ;
                                     docker run -d --name treasure_hunt-app -p 80:80 treasure_hunt-frontend ;
                                     '''
                                    }
                              }
                echo 'Deploying project'
            }
        }
    }


}