using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Patern4
    {
        static void Main()
        {
            int k = 6;
            for (int i = 1; i <=6; i++)
            {
                for (int j = 6; j >=i; j--)
                {
                    Console.Write(j);
                }
                k--;
                Console.WriteLine();
            }
            Console.ReadLine();
            //output
            //    654321
            //    65432
            //    6543
            //    654
            //    65
            //    6
        }
    }
}
