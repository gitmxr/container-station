const DockerCommand = require('../models/dockerCommand');
var dataInitializer = function () {
    const initializeData = async (callback) => {

        const commands = [
            // Container Commands
            new DockerCommand({
                command: 'run',
                description: 'Runs a Docker container',
                examples: [
                    {
                        example: 'docker run imageName',
                        description: 'Creates and runs a container from the image. Pulls it from Docker Hub if not available locally.'
                    },
                    {
                        example: 'docker run -d -p 8080:3000 imageName',
                        description: 'Runs the container in detached mode, mapping port 8080 on the host to port 3000 on the container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'ps',
                description: 'Lists running or all containers',
                examples: [
                    {
                        example: 'docker ps',
                        description: 'Lists all running containers.'
                    },
                    {
                        example: 'docker ps -a',
                        description: 'Lists all containers, including those that are stopped.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'exec',
                description: 'Executes a command inside a running container',
                examples: [
                    {
                        example: 'docker exec -it containerName bash',
                        description: 'Starts a bash session in a running container.'
                    },
                    {
                        example: 'docker exec containerName command',
                        description: 'Runs a command inside a container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'stop',
                description: 'Stops a running container',
                examples: [
                    {
                        example: 'docker stop containerName',
                        description: 'Stops the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'start',
                description: 'Starts a stopped container',
                examples: [
                    {
                        example: 'docker start containerName',
                        description: 'Starts the specified stopped container.'
                    }
                ]
            }),

            // Image Commands
            new DockerCommand({
                command: 'pull',
                description: 'Downloads an image from Docker Hub or a registry',
                examples: [
                    {
                        example: 'docker pull imageName',
                        description: 'Pulls the latest version of the image from Docker Hub.'
                    },
                    {
                        example: 'docker pull imageName:tag',
                        description: 'Pulls a specific tagged version of the image.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'images',
                description: 'Lists all images available locally',
                examples: [
                    {
                        example: 'docker images',
                        description: 'Lists all downloaded images with their tags and sizes.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'rmi',
                description: 'Removes an image',
                examples: [
                    {
                        example: 'docker rmi imageName',
                        description: 'Removes the specified image from the local machine.'
                    }
                ]
            }),

            // Volume Commands
            new DockerCommand({
                command: 'volume create',
                description: 'Creates a new Docker volume',
                examples: [
                    {
                        example: 'docker volume create myvolume',
                        description: 'Creates a new volume with the name "myvolume".'
                    }
                ]
            }),
            new DockerCommand({
                command: 'volume ls',
                description: 'Lists all Docker volumes',
                examples: [
                    {
                        example: 'docker volume ls',
                        description: 'Lists all the volumes created on the Docker host.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'volume rm',
                description: 'Removes a Docker volume',
                examples: [
                    {
                        example: 'docker volume rm myvolume',
                        description: 'Removes the specified volume.'
                    }
                ]
            }),

            // Network Commands
            new DockerCommand({
                command: 'network create',
                description: 'Creates a new Docker network',
                examples: [
                    {
                        example: 'docker network create mynetwork',
                        description: 'Creates a new network with the name "mynetwork".'
                    }
                ]
            }),
            new DockerCommand({
                command: 'network ls',
                description: 'Lists all Docker networks',
                examples: [
                    {
                        example: 'docker network ls',
                        description: 'Displays all available networks on the Docker host.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'network rm',
                description: 'Removes a Docker network',
                examples: [
                    {
                        example: 'docker network rm mynetwork',
                        description: 'Removes the specified network.'
                    }
                ]
            }),

            // Build Commands
            new DockerCommand({
                command: 'build',
                description: 'Builds an image from a Dockerfile',
                examples: [
                    {
                        example: 'docker build -t imageName .',
                        description: 'Builds a Docker image from the Dockerfile in the current directory and tags it as "imageName".'
                    }
                ]
            }),
            new DockerCommand({
                command: 'buildx',
                description: 'Builds images using multiple platforms',
                examples: [
                    {
                        example: 'docker buildx build --platform linux/amd64,linux/arm64 -t imageName .',
                        description: 'Builds an image for multiple architectures (AMD64, ARM64).'
                    }
                ]
            }),

            // Tagging Commands
            new DockerCommand({
                command: 'tag',
                description: 'Tags an image with a name or version',
                examples: [
                    {
                        example: 'docker tag imageID repositoryName:imageTag',
                        description: 'Tags the image with the provided repository name and image tag.'
                    }
                ]
            }),

            // Logs and Stats Commands
            new DockerCommand({
                command: 'logs',
                description: 'Shows logs from a container',
                examples: [
                    {
                        example: 'docker logs containerName',
                        description: 'Displays the logs of a running or stopped container.'
                    },
                    {
                        example: 'docker logs -f containerName',
                        description: 'Follows the logs of the container in real-time.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'stats',
                description: 'Displays a live stream of resource usage statistics for containers',
                examples: [
                    {
                        example: 'docker stats',
                        description: 'Shows live CPU, memory, network, and disk statistics for all running containers.'
                    }
                ]
            }),

            // System Commands
            new DockerCommand({
                command: 'system df',
                description: 'Shows Docker disk usage',
                examples: [
                    {
                        example: 'docker system df',
                        description: 'Displays disk space usage of Docker images, containers, volumes, and build cache.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'system prune',
                description: 'Removes unused data (containers, images, networks, and volumes)',
                examples: [
                    {
                        example: 'docker system prune',
                        description: 'Removes all stopped containers, unused networks, dangling images, and build cache.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'commit',
                description: 'Creates a new image from a container’s changes',
                examples: [
                    {
                        example: 'docker commit containerName newImageName',
                        description: 'Creates a new image from the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'inspect',
                description: 'Displays detailed information on objects',
                examples: [
                    {
                        example: 'docker inspect containerName',
                        description: 'Displays detailed information about the container.'
                    },
                    {
                        example: 'docker inspect imageName',
                        description: 'Displays detailed information about the image.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'rm',
                description: 'Removes one or more containers',
                examples: [
                    {
                        example: 'docker rm containerName',
                        description: 'Removes the specified container.'
                    },
                    {
                        example: 'docker rm $(docker ps -a -q)',
                        description: 'Removes all stopped containers.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'kill',
                description: 'Kills a running container',
                examples: [
                    {
                        example: 'docker kill containerName',
                        description: 'Kills the specified running container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'cp',
                description: 'Copies files/folders between a container and the local filesystem',
                examples: [
                    {
                        example: 'docker cp containerName:/path/to/file /host/path',
                        description: 'Copies a file from the container to the local filesystem.'
                    },
                    {
                        example: 'docker cp /host/path containerName:/path/to/file',
                        description: 'Copies a file from the local filesystem to the container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'restart',
                description: 'Restarts a running container',
                examples: [
                    {
                        example: 'docker restart containerName',
                        description: 'Restarts the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'pause',
                description: 'Pauses all processes within a container',
                examples: [
                    {
                        example: 'docker pause containerName',
                        description: 'Pauses the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'unpause',
                description: 'Resumes all processes within a paused container',
                examples: [
                    {
                        example: 'docker unpause containerName',
                        description: 'Resumes the specified paused container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'top',
                description: 'Displays the running processes of a container',
                examples: [
                    {
                        example: 'docker top containerName',
                        description: 'Shows the running processes in the container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'attach',
                description: 'Attaches to a running container',
                examples: [
                    {
                        example: 'docker attach containerName',
                        description: 'Attaches the console to a running container’s input/output.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'rename',
                description: 'Renames an existing container',
                examples: [
                    {
                        example: 'docker rename oldContainerName newContainerName',
                        description: 'Renames the container from "oldContainerName" to "newContainerName".'
                    }
                ]
            }),
            new DockerCommand({
                command: 'wait',
                description: 'Blocks until a container stops and then prints its exit code',
                examples: [
                    {
                        example: 'docker wait containerName',
                        description: 'Waits for the specified container to stop and outputs the exit code.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'port',
                description: 'Lists port mappings or a specific mapping for a container',
                examples: [
                    {
                        example: 'docker port containerName',
                        description: 'Displays all the port mappings of the container.'
                    },
                    {
                        example: 'docker port containerName 8080',
                        description: 'Displays the host port mapped to the container’s port 8080.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'history',
                description: 'Shows the history of an image',
                examples: [
                    {
                        example: 'docker history imageName',
                        description: 'Displays the image history including the creation commands and layers.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'create',
                description: 'Creates a new container but does not start it',
                examples: [
                    {
                        example: 'docker create imageName',
                        description: 'Creates a container from the specified image.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'login',
                description: 'Logs into a Docker registry',
                examples: [
                    {
                        example: 'docker login',
                        description: 'Prompts for Docker registry credentials.'
                    },
                    {
                        example: 'docker login -u username -p password registryURL',
                        description: 'Logs into a Docker registry with username and password.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'logout',
                description: 'Logs out from a Docker registry',
                examples: [
                    {
                        example: 'docker logout',
                        description: 'Logs out from the default Docker registry.'
                    },
                    {
                        example: 'docker logout registryURL',
                        description: 'Logs out from the specified Docker registry.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'push',
                description: 'Pushes an image or a repository to a Docker registry',
                examples: [
                    {
                        example: 'docker push imageName',
                        description: 'Pushes the specified image to Docker Hub or another registry.'
                    },
                    {
                        example: 'docker push repositoryName:imageTag',
                        description: 'Pushes the image with the specified tag to a repository.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'pull',
                description: 'Pulls an image or a repository from a Docker registry',
                examples: [
                    {
                        example: 'docker pull imageName',
                        description: 'Pulls the latest image from the registry.'
                    },
                    {
                        example: 'docker pull repositoryName:imageTag',
                        description: 'Pulls the image with the specified tag from a repository.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'save',
                description: 'Saves one or more images to a tar archive',
                examples: [
                    {
                        example: 'docker save -o archive.tar imageName',
                        description: 'Saves the specified image to a tar archive named "archive.tar".'
                    }
                ]
            }),
            new DockerCommand({
                command: 'load',
                description: 'Loads an image from a tar archive',
                examples: [
                    {
                        example: 'docker load -i archive.tar',
                        description: 'Loads an image from the specified tar archive.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'restart',
                description: 'Restarts one or more containers',
                examples: [
                    {
                        example: 'docker restart containerName',
                        description: 'Restarts the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'rename',
                description: 'Renames an existing container',
                examples: [
                    {
                        example: 'docker rename oldContainerName newContainerName',
                        description: 'Renames the container from "oldContainerName" to "newContainerName".'
                    }
                ]
            }),
            new DockerCommand({
                command: 'inspect',
                description: 'Displays detailed information on Docker objects',
                examples: [
                    {
                        example: 'docker inspect containerName',
                        description: 'Displays detailed information about the specified container.'
                    },
                    {
                        example: 'docker inspect imageName',
                        description: 'Displays detailed information about the specified image.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'events',
                description: 'Gets real-time events from the Docker server',
                examples: [
                    {
                        example: 'docker events',
                        description: 'Streams real-time events from the Docker daemon.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'info',
                description: 'Displays system-wide information',
                examples: [
                    {
                        example: 'docker info',
                        description: 'Shows detailed information about the Docker installation, including number of containers, images, and resources.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'diff',
                description: 'Inspects changes to files or directories on a container’s filesystem',
                examples: [
                    {
                        example: 'docker diff containerName',
                        description: 'Shows the differences in the container’s filesystem since it was started.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'export',
                description: 'Exports a container’s filesystem as a tar archive',
                examples: [
                    {
                        example: 'docker export -o containerBackup.tar containerName',
                        description: 'Exports the filesystem of the specified container to a tar archive.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'import',
                description: 'Imports a tarball to create a filesystem image',
                examples: [
                    {
                        example: 'docker import archive.tar imageName',
                        description: 'Creates a new filesystem image from the specified tar archive.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'version',
                description: 'Shows the Docker version information',
                examples: [
                    {
                        example: 'docker version',
                        description: 'Displays the Docker client and server version details.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'top',
                description: 'Displays the running processes of a container',
                examples: [
                    {
                        example: 'docker top containerName',
                        description: 'Shows the running processes inside the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'attach',
                description: 'Attaches to a running container',
                examples: [
                    {
                        example: 'docker attach containerName',
                        description: 'Attaches the console to the container’s input/output.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'port',
                description: 'Lists port mappings or a specific mapping for a container',
                examples: [
                    {
                        example: 'docker port containerName',
                        description: 'Displays the port mappings for the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'stats',
                description: 'Displays a live stream of container resource usage statistics',
                examples: [
                    {
                        example: 'docker stats',
                        description: 'Shows real-time resource usage stats for all running containers.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'kill',
                description: 'Kills one or more running containers',
                examples: [
                    {
                        example: 'docker kill containerName',
                        description: 'Sends a SIGKILL signal to the specified container.'
                    },
                    {
                        example: 'docker kill -s SIGTERM containerName',
                        description: 'Sends a SIGTERM signal to gracefully stop the container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'pause',
                description: 'Pauses all processes within one or more containers',
                examples: [
                    {
                        example: 'docker pause containerName',
                        description: 'Pauses the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'unpause',
                description: 'Resumes all processes within one or more paused containers',
                examples: [
                    {
                        example: 'docker unpause containerName',
                        description: 'Resumes the specified paused container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'events',
                description: 'Gets real-time events from the Docker daemon',
                examples: [
                    {
                        example: 'docker events',
                        description: 'Streams real-time events from the Docker daemon as containers are created, started, or stopped.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'system prune',
                description: 'Removes unused data (containers, images, networks, volumes)',
                examples: [
                    {
                        example: 'docker system prune',
                        description: 'Removes all stopped containers, unused networks, dangling images, and build cache.'
                    },
                    {
                        example: 'docker system prune -a',
                        description: 'Removes all unused containers, images, and networks (not just dangling ones).'
                    }
                ]
            }),
            new DockerCommand({
                command: 'volume inspect',
                description: 'Displays detailed information on one or more volumes',
                examples: [
                    {
                        example: 'docker volume inspect volumeName',
                        description: 'Displays detailed information about the specified volume.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'volume prune',
                description: 'Removes all unused volumes',
                examples: [
                    {
                        example: 'docker volume prune',
                        description: 'Removes all unused volumes that are not associated with any containers.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'network inspect',
                description: 'Displays detailed information on one or more networks',
                examples: [
                    {
                        example: 'docker network inspect networkName',
                        description: 'Displays detailed information about the specified network.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'network connect',
                description: 'Connects a container to a network',
                examples: [
                    {
                        example: 'docker network connect networkName containerName',
                        description: 'Connects the specified container to the specified network.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'network disconnect',
                description: 'Disconnects a container from a network',
                examples: [
                    {
                        example: 'docker network disconnect networkName containerName',
                        description: 'Disconnects the specified container from the specified network.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'checkpoint create',
                description: 'Creates a checkpoint from a running container',
                examples: [
                    {
                        example: 'docker checkpoint create containerName checkpointName',
                        description: 'Creates a checkpoint for the specified running container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'checkpoint ls',
                description: 'Lists checkpoints for a container',
                examples: [
                    {
                        example: 'docker checkpoint ls containerName',
                        description: 'Lists all checkpoints for the specified container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'checkpoint rm',
                description: 'Removes a checkpoint from a container',
                examples: [
                    {
                        example: 'docker checkpoint rm containerName checkpointName',
                        description: 'Removes the specified checkpoint from the container.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'builder prune',
                description: 'Cleans up unused build cache',
                examples: [
                    {
                        example: 'docker builder prune',
                        description: 'Removes all unused build cache.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'plugin install',
                description: 'Installs a Docker plugin',
                examples: [
                    {
                        example: 'docker plugin install pluginName',
                        description: 'Installs the specified Docker plugin.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'plugin ls',
                description: 'Lists all Docker plugins',
                examples: [
                    {
                        example: 'docker plugin ls',
                        description: 'Lists all installed Docker plugins.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'plugin enable',
                description: 'Enables a Docker plugin',
                examples: [
                    {
                        example: 'docker plugin enable pluginName',
                        description: 'Enables the specified Docker plugin.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'plugin disable',
                description: 'Disables a Docker plugin',
                examples: [
                    {
                        example: 'docker plugin disable pluginName',
                        description: 'Disables the specified Docker plugin.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'plugin rm',
                description: 'Removes a Docker plugin',
                examples: [
                    {
                        example: 'docker plugin rm pluginName',
                        description: 'Removes the specified Docker plugin.'
                    }
                ]
            }),
            new DockerCommand({
                command: 'checkpoint restore',
                description: 'Restores a container from a checkpoint',
                examples: [
                    {
                        example: 'docker checkpoint restore --checkpoint checkpointName containerName',
                        description: 'Restores the specified container to the state saved in the checkpoint.'
                    }
                ]
            }),                                    
        ];

        try {
            for (const cmd of commands) {
                await cmd.save();
            }
            callback();
        } catch (err) {
            callback(err);
        }

    };

    return {
        initializeData: initializeData
    };

}();

module.exports = dataInitializer;
