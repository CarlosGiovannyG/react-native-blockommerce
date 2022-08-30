import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Image } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={46.189}
      height={29.096}
      viewBox="0 0 46.189 29.096"
      {...props}
    >
      <Image
        width={46.189}
        height={29.096}
        xlinkHref="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6RUY4QjYzNjk3QjdGMTFFN0I2OThERTIxNzcxRTI1NUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTYwN0ZCN0E1NTA5MTFFQjg4M0ZFMENCRDk3REU1NzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTYwN0ZCNzk1NTA5MTFFQjg4M0ZFMENCRDk3REU1NzAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZDFiZTk4OS1iNTdhLTQ2ZTQtOThlMS0zNWI1MjgzZTU1NzEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YzU4MzI3ZC01OTgwLTNhNDktYjkyYS0zNWU5ZGRmNjc3ZTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCABQAH8DAREAAhEBAxEB/8QAvgABAQACAQUBAAAAAAAAAAAAAAoBCQIDBgcICwQBAQADAAMBAQEAAAAAAAAAAAABBwgFBgkCBAoQAAAFAwMABwUEBwYHAAAAAAECAwQFBgcIABEJITESp9dYGRO3OHgK8EFRFGFxIjIjFRaRobHRJYeBwUJSUyQXEQABAgQDAgoIAwUGBwEAAAABAgMAEQQFIQYHEhcxQROj06TUVXU2UWFxIrMUtAiBkTKhciMzFcFCUmKDFrHRktJTkyRk/9oADAMBAAIRAxEAPwCgDmj5U7j4Qu6CsjYJpCtLvV/SytezNbVFFoTjaiqLUmJOnoQ0DBPQUipKoJ2agn4Cq+TXatEGYgLdY65ToaE0S0mtuekVF9zCVmzU7vJJaQopLrmylattQ95KEJWjBJClFX6gEkKpzVPUOuympm02YIFzeb5RTihtBCNopTspOBUpSVYqBACeAkzE6Prjco/mf2/2Vx48JdaS3EaVd1dZrO0RSG9rUHvDmKboYeuNyj+Z/uVx48JdNxGlPdXWaztEN7WoPeHMU3Qw9cblH8z/AHK48eEum4jSnurrNZ2iG9rUHvDmKboYeuNyj+Z/uVx48JdNxGlPdXWaztEN7WoPeHMU3Qw9cblH8z/crjx4S6biNKe6us1naIb2tQe8OYpuhh643KP5n+5XHjwl03EaU91dZrO0Q3tag94cxTdDD1xuUfzP9yuPHhLpuI0p7q6zWdohva1B7w5im6GHrjco/mf7lcePCXTcRpT3V1ms7RDe1qD3hzFN0MPXG5R/M/3K48eEum4jSnurrNZ2iG9rUHvDmKboYeuNyj+Z/uVx48JdNxGlPdXWaztEN7WoPeHMU3Qw9cblH8z/AHK48eEum4jSnurrNZ2iG9rUHvDmKboYeuNyj+Z/uVx48JdNxGlPdXWaztEN7WoPeHMU3Qw9cblH8z/crjx4S6biNKe6us1naIb2tQe8OYpuhjqJc5PKKmqmofJpNchDlMZFWy2PgJKlKYBFNQULUorAQ4BsPYOU2w9AgPTqDoRpUQQLXI+n5mr/ALagiJGrWoAMzXz/ANCm6GKMsKeVm4eUvH5mLdeXiqdgckcTbO3Aqh++i405qQqB43tlW9V23q8YF04WBoo9lqLeIyMeCp25jsxUTFNNwCCGbM8aS27KmolltDK3HMs3etZbAUr+IgF9pt5vbAE5JdSULlOSpGZTtKu/KuolbmHJlzuLqUIvttpXFkge4ohpxbS9knCZQoKTOXuzEgZDT19Sj8c9qflOoX3wX21cv2yeQ6vxd36elistdfN1N4c38aoiezWi4paGkIaQhpCGkIaQhpCGkIaQhpCGkIaQhpCGkIoT4c/gY5sflOae5/LHWdNaPPmRvFz9RQRdOmPlHNfhw+DWQ+pR+Oe1PynUL74L7afbJ5Dq/F3fp6WGuvm6m8Ob+NURPZrRcUuBOAiABv8Ar3/V0baRENwEA233/wCIBt93XpEwDpEA36/u7Jh/vANg0hDq6/0aQhv09W32/TqYmXuz9cY0iZTA2eGMgA7b/b7v89IhUp4cENRHzDSJMuKH2/s0iIxqY+sJeuOQBv0dO+/X0bAG3WOoiIxpERQnw5/AxzY/Kc09z+WOs6a0efMjeLn6igi6dMfKOa/Dh8Gsh9Sj8c9qflOoX3wX20+2TyHV+Lu/T0sNdfN1N4c38aoiesekP+f4a0YMDFL4x7Q2kvLZOmyso68ON1F13CtkCIuKgp9/UMHWAAiUAM8coKzykJMrmLuYxQIzE5uowayZrLojrpmIP3TRfU292C8rWpaaOrbpqm3mczyba00wqWEg4Jmp/ZHEQI0NppqppTYyzQan5FtV2tSEhKqmnW+xWAf41pU+WHjsznJLRVgARMmN2tecfGPElblm/jrRJ0ircK3jGubc1TFSc2mq7j6ggk5umJeMcKSr+Oeoq/mESromKfbcyZylHbXjY994H3q6I6sUtk1Uv9U/S0dyQipp6hmnXTVTCXg08W1ttIUpJTtFDiFpWhWySkHCPS1v7cvtg1T08qLpkC1UzNVUUSlMvMOPt1FO8poraC0LcUAdqQUkhSFAGROBE2jeOlXb1CIZMV3s27fJRDONQSMZw7mXLkrBtHIJAAmM4cP1CpFL1iYQDX9H6aukdYTXIWPkFIDgUZD+EU7e0eKWx72HFwR4pLpn0VJoikirDhblLgXtbMpfvRddSfEbx02AxUha1yJsHTNW1RbCzJauvHW0zUdZM3stOwNMmnawc+xY1THRqX+oEWbtU00kw7BUybCbcRwHWavalZgzYuky1cX2qSrrOTp2kJbklC17LcpoKv0yUqZ4jGu6fTnJFky+mqvNEyt9im23lqK8VJTNf96WJwEh6MI1ocJeBuLmY1FZL3uvtYSnaipl7eclPWnpVzJVUyjaChUYtepZSDilYydZOXiDNCpo9n7Ryqups0ARNuYRGz9cdQc2ZNrrXYLBcnmqtFFtVDgCCXlFWylatpJGJQsiQHDOOhaVZRy9mWkuF1ulG05TmrKWUnak2mRUUpx4gpI45SjX9yb4v21a8lMZh/hpayDo47iNtVQkfS8RISqzCSuPXLc8+9k5SSnZKWctEGMRNtPzJ+2CaDdqc3Z3Ad7G0rzTczpivOmdqx2oSlb7pWrZ2g00QgJSEhM5rSQB6VCOnZ8y9R/77RlrLFMloFDSAhM5FapqUSVE4BJBOMpCKDseuDfA3GS3BayyjGFvJVcVFoP65ra6NQKUvaSn3JeyZ2MHToyMPFtIRFVQEiLS6zxZcCgYfZif2Zc6Zk151AzRc/lcqqcoaZaylpphPKPrHFtKkpRWRjsoAA4BPhi5rJpNk+wUPL30Jqn0Im4t1Wy0k8J2UjZASOCapk8cd1z+KnCLeaga/XoSiMUqpWo+jqpqR8Wz1bRcNWMczp2Eeyjp83Gi6jZy4lbItBMChk1EQENxAdfkpc366WW40ya9+7NIdfQkfMNKKCVKAAPKIKcZ8Axj9T2XNK7lSPKp2bc4pttRPJLSFgJBUZbCp4AeyIR2LZ3MPWbGEYOX7+XetmMLFtiHcPHz2TckaxUcgQNzrOnThdNIgdZjmD7x1v5xxphlTlQoJaQkqWo4AJAmo+oATOEZAShbziW2BNxRASPSSZJH4mQ/GLvsXeDTCCh7G29jL7WYZXTvA7pqJlbjVNU9SVagZOrZFgg6mYaGj4KoYuMYQkE9WO1bkKmZQ5Eu2oc5zCOsA5q10z5X32oesdwXSWgOqSyhtKP5aSQhSipJJUpIBOMvVGwLDpRlOjtLLV0pEv3HYBcWtSp7ZAKgJKAkDgPz44mr5qsTra4jZiMqRs1SDahbX1taakK3p2mWDmSesY2RB/PUzUZG7mXfSEgYriQgiuDAdUwFOuIF2DYA0/oXm66ZxyUqsvTyqi6s1a21uKlNQKUrRMJAGAVIYcAih9Vcu0GW8yimtbQZoHqZC0pEyAdpaVSmScSBhONRY7j94h9v89XJFaSwnHIf7Ov/AB/HSIihLhz+Bjmx+U5p7n8sdZ01o8+ZG8XP1FBF0aY+Uc1+HD4NZD6lH457U/KdQvvgvtp9snkOr8Xd+npYa6+bqbw5v41RE9mtFxS/BjGOz0b/AKw23/HoH/HSJCve2jF1vEa/iMweL229GVmZF1UVnZerLSxs4YxVpWBXpB2R7RsgURD2pEyUrMsW6iQj7NdulsP3dnyp+8bRuxZ0v9yy9cm0pFc0mqpnwn36d9xH8xB9HKhQcSDJSSR6Jb7+2zUq7ZWtFDerctSvlXCw+yT7rzSFT2Fj9wjYVKaTIgxpFwOwdlqn5mqxt1UEakhTGLVzarvFWLc7YjlioEFLtnlBxaaawAgo1lapn2SyQiA9pq2OYAHbWkLZnm60H2m5fdvZ2c11dnYtzo2seXp0mnqFT4SAlkkK4+UGOONL12VrfW/cJd/6WJ5eYuL1a3NMv4TxDzCSOIguhJHFsGXBG3D6ibKIltMYqTxrhHyyVWZEVADme/KuRROztlQD6OlZkrspAE5kaiqNSPZlKIlIqiRwHSBRDXW/tsym5dM0u5lfTOktjckkjAvvBQRInhKEhSj6Dsn0RzWtl/8A6fl9FkaMqmuXjI8DSCCqf7xKU/nHnrgFoJ1RXHBQcq7SOkpce4tzq/QA5RATs3dQhSzFXqDtkVa0sQxR/wC0Q1wX3B3BFbqTUttmYp6dlr8QjbI/NZjmNHqP5XI7CiJcs865+BWUg/iE4RPsfKu31Ac9VXZDXBetS23hckquoeUqFz/EZU5DNqXcWea1YoZNNYfyFPuW5XSxiFExG5TmDpDfWhk5SuVw+39nL1sB/qTluQ6EAe84or+YLY9ahgPSZCKaGYqSk1idvFaR8iKxTZUeBACC0F+wGK3M28TKF5BcZ5Wy0nXUjTkFUz2ma0pSu6PVZzbNOThVBkYCUUZA6Ti6spp6i6EToCsVNYhyqJqEUImcuQsj5vuGneZ0Xynp0O1LSVtuNOTSZKElpmPebWCMDwpIkQRMHRuasuUmcbEq1uvKQy4UrQ4gg4p/SeGSkmeIniIhczg40sl8AJ1tJXDjWdQ24l5RzDUleeg1HRqdkl1UlvZRM4iPs5Wj55+wKf8A9N3ui4ADlRWXAptt5ZD1PytqG0W6BRauyRtLpnQNsASJKT+l1IOIIkRwlIwjJWbMh37JS+UqxylvUZIebnsmcxJQ4UKIwkcCCQCY8+8HOLCeSOcdKVJOM1VqDx2ZI3jqAwo9pm+qaNkW7O3UCuqcBR/j1If+YCmO4qIxhy7dkREOB15zYcs5Fdo6dUrhc1GnR6Q2UkvKHokn3QfSqOX0ky8L5mtupeTOkoRyysMCsYNp/wCr3vwir7IfNRO2vIdhDiRFzqSTe68fdacufGp+xVUKk6pKTaWkaulRKY7Yz+p4Z+sBNymMCKY/uiG+Qsu5GVdNOb7m5aD/APEthLBM/wDyJL/tkhSRPgxPGMdGXnNPyOdLVlxtWFSl1To9WwQ1+ago/hGpX6my1KCtN4t3xbNzA8j6grS08y7KT9kWM1GN6up9NZUOoEXcC/7ACHWsO2rj+128FNbdLEo+6tpt9I9aFcms/ktH5RWuvVt2qW33ZHChxbSvYpO2nH1FJ/OJIx2Do+/8QHcB1sSM2RgQ22+33jpEkzihPhz+Bjmx+U5p7n8sdZ01o8+ZG8XP1FBF0aY+Uc1+HD4NZD6lH457U/KdQvvgvtp9snkOr8Xd+npYa6+bqbw5v41RE9mtFxS0Pu20PBhwxMVG/TO3ocMK8yVx9euygxqCmaYu5TjJVTs/6pT741I1UZoQx9jHcx0vGGU7JdxBtuO2wayh90VlCqC2ZjQma23F06z/AJVALbn7ClYHtjQeg90KKqusyzgtCXk48aTsKl+BBPsimm3GNtD21v3kHkHDNiDWuQxrbo1KqLYiYMWNuaX/AKeYNUFQ/iG/mS6qjpwP/Up2AH90B1lm45irq+w0GX3JC32/llIH+JTy9tRPrGCR7PXF90dkpaK8Vl5aE6ut5ILPoDSNlIH/ABPFEF3LblUbKvNy79ZRUiq/t/bx0raW2yYqio1LT1CLumcvKsSgc6YI1NVv59+Bg6TpKp7/ALoBr0E0dymcp5GpKR9GzX1I+YePGFOgFKT+63splxSPpjHupWYjmPNVS+0Z0TB5FrHiRgoji95cz+UXFYY04xsLgBj5GOkytG9A42UfUcwU5ewCTwaJQq+fOsUAAfafzB2uY/3iYRHWEM6VK8wZ+uLqDMv3NxKT6RyuwnH2ASjWeWqcWfJ9G0sSDFEhR9oRtK/bOPnq0zY7IfJNhde9Nt7VV3dCDgKrczNyZijIVeo3FPyFcOZmpUV5GKYCvMqtnSSTg5lkkFSJ9n9sS9ou/o1VX/L2WF0diutUxSvuMhDIcUEBYaCUHZJwEpgYkergjFrNnvd/+aulvpnqhpDhLpbTtFJcmoApBmRKc5AyjYjxk5vcgtgru26sdauBuNd63k3VURASdhKqpupZWMg4aQlkUpyUpaRcNUn1uFIZmss6MoCycWQUxM4RMXfVaaqZE05zDZam/wByep6K4oaUtNU2tAUtQSSlKwJh7aUJSAKyOBUd6yFmvOtnuVPaaRp+ooVuBCmVpVJIJkVIJxb2BieI+iK+uT+KoCW4+cs0rjptVKZaWXq6UTXdESMZrUkW0B7Rr1qdUDeykW9WJMhQOX9sFBACj06xxpa/cGtQLOu2k/NmtbThMTQTJYMv7pTOY4JGNJ59bo15PuIrgk04pVnETAUB7h9oVKXHHqNwPYsDj9hDTtfzzBVlcDJB+ldaoCu0PYvGdLGbmjbdRAgdJNUrf+nSfzICiJgBWTOIbb67jr7mr/cee3aKnWFW22AsII4Cuc3lD2rmj2IEdZ0iy7/RMqt1bqdmsrTyqp8IQf5afYE4+1Ud73X4jqQuzm7EZ0SuQd14u4lO1nQFVU9TEdF0gNMRDC3iUehF0u2OvGnlBiXqDRYHJhV9qcztU2+46/HatXqy1ZEXkNq3Ui7e4w82tZUvbUXjMuHGW0DKWEvdHoj9lw05pLhmtGbnKyqTXNuNqSkbGwA3gECaZyOM8cZnjj83Opa9K5XHBeR8VAi8hauTom6sebsidRv/AE7UjSNmVETAAiQxacnXnbH/AMfa1Ogt0Nr1NoW5yTVIcYV6CFoJSMf86Ey9co+NW6AV2RqtXGwUO/glQB/YTHz/AABDYQ2Dfq3Hf+4NteiUYyIKTI8Mcen79TEmXFFCfDn8DHNj8pzT3P5Y6znrR58yN4ufqKCLn0x8o5r8OHwayH1KPxz2p+U6hffBfbT7ZPIdX4u79PSw1183U3hzfxqiJ6jdrb9nr3/u1ouKYEp48Ecw230iI93uOvKiPwwy8tffuom04+oyALUsFXUVTaLd3MylK1PTshFOG7Fk8eMGjtw1lDtHRE1VkyiZuA9oDAGuh6l5Rdzxk2qy/TKQmucKFtKWZJStCwqZIBIBTtJwB4fROO3ZHzEjK+ZGLu/tGlRtJcCcSUKSQZDgJnsn8IovyR+omx3quwt2qWsVSV8YG71TUPO09QE7U1LUzHQcFPzbQ0YjNvXrGsZJ2gMQg6UcpCRBQwrpkDYN9wzVlv7b8z0t/pKq/u0K7O0+lbqULWpSkoO1sgFsA7RAScRgYvG+a02OptFTT2hupFyW0pLZUkJSFKEpk7UxIEng4oj9jRYmko4Zc7s8YaRYmmFUg/MPjx5naRpRVEFlEwcvjtRUEoGOHbUENzBuI62Y4lZYUlmQd2Ds8QnI7PsE5T9AjMaFJ5ZJeJKNobXpImJ/snFd+QHPziXVmMd2LQ2foq+0VWNS2gqS3FCvagpOmIyFjXkvTK9MR7qQeMqyfuWjZi2X7YmTQUMAkAAD7wxvlz7ec5UmaaO73t6gVRN1rbzwS4sqKUrC1SBbAM5SlPjjTF41jyw/Yqi325FUKldMttslAABKdkTO0eCc411cPPKXYbj+oe5tu7u27uTLHuJW8bVf9b0GjBTSbRlGU8wgWUM+p+SkYV9s0Ok4cAskssBvb9n2ZRDcbH1n0mzJqHcKS5Weopkpp6co5NwrTiVlZUFBKhjMDi4JzjpGmOoFlybRVFHc2nip97lNtsBWASAEkEg4Ymfr4I3dSv1DnHlHMFZKJSvfOSiifaCKj7UEjn7g/QPsl38vOR8aT9IiuYA26NUa39uWpDygy6aJtmf6i+CB6wAkn2YRaq9ackNt8o380p48QZkfxJIH5Exotzr5i5TPKoqMtFM01UVlcN29cUzMXPp6CXZ1TdS4UJCy6bt2aUcpLw8OkgDMgi0h0lTIFe9hZdyt7JMCXxkHRRGQaV+7svN1udPl3EsqUC2wytadkbOClbWOLhAwmEgTMVLm3U85wfatjjblLlgOpLqR7zrqQqZnIpABGGxiJkEnCUbJ8jfqCMapvGi5ttcbKPvhR1zJe3jyhbaSsrTlP0zDUcs+YJwLaYbycTV8g+jlqaijmWZ+wREwOEUgAS/vBWmW/tzzOzmeluOZ3aF60pqA6+kLWtTgCtopkpsAhRwMyJicd7ves1hXYn6KwoqUXFTBQ0SkJSglOyFTCiRsjESxnKJpzZt5nAkKZMtMjy/wxIU3/wBlr7tFESCUBAwzojuG/X+OtQJyHkgAD+kW6Q//ADtf9kUP/u/NpEhcqz/2q/5xRuvzo4jXFwvPjveqmL9zle1ZjuFq7i1A2pSnJSMka0eUEFNS9RJSTqtGz16mtO7vAXURKocf2hL2tw1mYaAZ0tudDmGxO0CLa1cS+yguKCg2HdtKdkNyBCcJTkQJCLw3u5arcsf0i6Jq1VrlFyTitgEFZb2Sqc8ZnGfp9cS3V9I29fkpktAwUjCi0hwQqA8gsooL6RL7ECKkFR47BRUmynbVKCZVO0XYobbBrK3M3FouquDgWFLmiXEPRxYRn+4O2xzkvkG1IUESWTxniPDHjwREevXJRxvFFCfDn8DHNj8pzT3P5Y6zprR58yN4ufqKCLo0x8o5r8OHwayH1KPxz2p+U6hffBfbT7ZPIdX4u79PSw1183U3hzfxqiJ7NaLiloaQhpExgQAegenSE5cEZ6A226Nvt0dGkIaQh1dQj09fTpEkzEobj17jv+vSPmG4/iOkTDcdtgHYNx3/AEgIdXTpCGkRDcfx0hGA6A2330hGdImKE+HP4GObH5Tmnufyx1nTWjz5kbxc/UUEXRpj5RzX4cPg1kPqUfjntT8p1C++C+2n2yeQ6vxd36elhrr5upvDm/jVET2a0XFLQ0hDSENIQ0hDSENIQ0hDSENIQ0hDSENIQ0hFCfDn8DHNj8pzT3P5Y6zprR58yN4ufqKCLp0x8o5r8OHwayNvvNHxWXHzed0Fe6wTuFd3eoCllaCmaJqKUQg21a0WnMSdQwhYGdeinFRtQQU1OvxFJ8og1doPBEXCJ0CkXpzRLVm25FRUWLMIWLNUO8ql1CSotObKUK20j3lIWlCMUgqSU/pIUSmzNU9PK7NimbtZig3Nlvk1NqOyFo2ipOyo4BSVKVgogEK4QRIzo+hzyj+WDf8A3qx48WtaS376Vd69WrOzxSG6XUHu/n6bpoehzyj+WDvqx48WtN++lPevVqzs8N0uoPd/P03TQ9DnlH8sHfVjx4tab99Ke9erVnZ4bpdQe7+fpumh6HPKP5YO+rHjxa0376U969WrOzw3S6g938/TdND0OeUfywd9WPHi1pv30p716tWdnhul1B7v5+m6aHoc8o/lg76sePFrTfvpT3r1as7PDdLqD3fz9N00PQ55R/LB31Y8eLWm/fSnvXq1Z2eG6XUHu/n6bpoehzyj+WDvqx48WtN++lPevVqzs8N0uoPd/P03TQ9DnlH8sHfVjx4tab99Ke9erVnZ4bpdQe7+fpumh6HPKP5YO+rHjxa0376U969WrOzw3S6g938/TdND0OeUfywd9WPHi1pv30p716tWdnhul1B7v5+m6aHoc8o/lg76sePFrTfvpT3r1as7PDdLqD3fz9N00PQ55R/LB31Y8eLWm/fSnvXq1Z2eG6XUHu/n6bpo6iXBtyiqKppnxlTQIc5SmWVvTj4KSRTGABUUBC6yywkIA7j2CGNsHQAj0ag676VAEi6TPo+Wq/7acCJGkuoBMjQS/wBem6aKMcKeKa4eLXH5mLaiYladnskcsrO3ApZ+xi5I5aQp924tlW9KW3pAZ503RB2oyl60eLSEgCRG5TvBTTBRNuC6+bM8atW3Neollu7KHG8s2itZcBUn+IsB9px5zYBMppaSEInOSZmRVspu/Kundbl7JlztzqkLvtypXEEA+4klpxDSNojGRWoqVKXvSEwJn//Z"
      />
    </Svg>
  )
}

export default SvgComponent