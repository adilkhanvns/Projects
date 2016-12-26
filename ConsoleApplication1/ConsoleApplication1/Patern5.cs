using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Patern5
    {
        static void Main()
        {
            int k = 1;
            for (int i = 1; i <= 6; i++)
            {
                for (int j = 1; j<=i; j++)
                {
                    Console.Write(i);
                }
                k++;
                Console.WriteLine();
            }
            Console.ReadLine();
                    // output
                    //1
                    //22
                    //333
                    //4444
                    //55555
                    //666666
        }
    }
}
